var viewanimalgames = (req,res)=>{
    res.send("<ul><li>Angry Birds Friends</li><li>My Taking Tom</li><li>Worms Zone.io-Hungry Snake</li><li>Connect Animal Classic Travel</li><li>Cat Runner</li><li>Fish Go.io 2</li></ul>")
}
var viewsportsgames = (req,res)=>{
    res.send("<ul><li>Carrom King</li><li>8 Ball Pool</li><li>Tennis Clash</li><li>Badminton Clash 3D</li><li>3D Tennis</li><li>Football Strike</li></ul>")
}
var viewstrategygames = (req,res)=>{
    res.send("<ul><li>Avatar:Realms Collide</li><li>Nations of Darkness</li><li>Tower War-Tactical Conquest</li><li>Clash Royale</li><li>Kingshot</li><li>Game of Warriors</li></ul>")
}
var viewmergegames = (req,res)=>{
    res.send("<ul><li>Merge Studio:Fashion Makeover</li><li>Merge Cooking</li><li>Merge Puzzle:Number Games</li><li>Water Sort Color Puzzle Games</li><li>Fruit Clash-Sort and Merge</li><li>Merge Dragons</li></ul>")
}
var viewbubbleshootergames = (req,res)=>{
    res.send("<ul><li>bubble Shooter Rainbow</li><li>Jungle Marble Blast</li>Puzzle games<li></li>Bubble Shooter Jelly<li>Bubble Shooter Splash</li><li>Marble Match Origin</li><li>Balls Shooter</li></ul>")
}

module.exports={viewanimalgames,viewsportsgames,viewstrategygames,viewmergegames,viewbubbleshootergames};