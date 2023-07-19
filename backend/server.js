const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const request = require("request");
const axios = require('axios');

app.get("/", (req, res) => res.send("League of Legends AI Laning API!"));

app.get("/api/summoner/:name", (req, res) => {
  const name = req.params.name;
  const api_key = process.env.API_KEY;
  const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api_key}`;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });

  const url2 = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${name}?api_key=${api_key}`;

  request(url2, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.get("/api/summoner/previous-matches/:name", (req, res) => {
  const name = req.params.name;
  const api_key = process.env.API_KEY;
  const puuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api_key}`;
  console.log(puuidURL);
  request(puuidURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const puuid = JSON.parse(body).puuid;
      const matchURL = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${api_key}`;
      request(matchURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    }
  });
});

app.get("/api/summoner/activematch/:name", (req, res) => {
  const name = req.params.name;
  const api_key = process.env.API_KEY;
  const puuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${api_key}`;
  console.log(puuidURL)
  request(puuidURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const id = JSON.parse(body).id;
      console.log(id)
      const matchURL = `https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${api_key}`;
      console.log(matchURL)
      request(matchURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    }
  });
});

app.get("/api/championdata/:name", (req, res) => {
    const name = req.params.name;
    const api_key = process.env.API_KEY;
    const url = `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${name}.json`;
    const loadingUrl=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`
    console.log(url)

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const championName = data.data[name].name;
            const championTitle = data.data[name].title;
            const championSpells = data.data[name].spells;
            var spellList=[];
            var imageNameList=[];
            for (var spell in championSpells) {
                spellList.push(championSpells[spell].name);
                imageNameList.push(championSpells[spell].image.full);
            }
            const passiveName = data.data[name].passive.name;
            const passiveImage = data.data[name].passive.image.full;

            const loadingImage=request(loadingUrl, async function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    const loadingImage=(response.body);
                    abilityImages= await getAbilityImages(imageNameList);
                    res.send({name: championName, title: championTitle, spells: spellList, passive: passiveName, imageNames: imageNameList, loadingArt: loadingImage, abilityImages: abilityImages});
                }
            });
        }
    });
});

async function getAbilityImages(imageNameList) {
        try {
            console.log(imageNameList)
            const requests = imageNameList.map(imageName => axios.get(`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${imageName}`));
            const result = await Promise.all(requests);
            const abilityImages = result.map(response => response.data);
            return abilityImages;
        }
        catch (error) {
            console.log(error)
        }
}

app.get("/api/championAbilityImages/:name", (req, res) => {
    const name = req.params.name;
    const api_key = process.env.API_KEY;
    const url = `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${name}.json`;

    request(url, async function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const championSpells = data.data[name].spells;
            var imageNameList=[];
            for (var spell in championSpells) {
                imageNameList.push(championSpells[spell].image.full);
            }
            abilityImages= await getAbilityImages(imageNameList);
            res.send({abilityImages: abilityImages});
        }
    });
});

app.get("/api/championLoadingArt/:name", (req, res) => {
    const name = req.params.name;
    const api_key = process.env.API_KEY;
    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
    
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const loadingImage=(response.body);
            res.send({loadingArt: loadingImage});
        }
    });
});





    





app.listen(port, () => console.log(`Example app listening on port ${port}!`));
