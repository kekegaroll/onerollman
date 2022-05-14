function getStatsData(){
    return fetch("https://kekegaroll.github.io/onerollman/data/000_stats.txt")
        .then(response => response.text());
}
console.log(getStatsData());