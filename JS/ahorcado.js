var game = game || {};
game = {
    Play : class{
        constructor(){
            this.words = ["OFENSA","PROBLEMAS","ESTALLIDO","AGUA","VOTAR","LAGO","GALLINA","SIRENA","BATUTA","CARTA"];
            this.letters = [];
            this.div = document.getElementById("keyboard");
            this.attemps = 10;
            this.array = [];
            this.word = this.chooseWord();
            this.createWord();
            this.sons = document.getElementById("word").children;
            this.keyboard = this.createKeyboard(); 
            this.clickButtons();
            this.reestart();
        }

        chooseWord(){
            let num = Math.round(Math.random()*(this.words.length));
            let wrd = this.words[num];
            return wrd;
        }

        createWord(){
            let div;
            for (let i = 0; i < this.word.length; i++) {
                this.array.push(this.word.charAt(i));
                div = document.createElement("div");
                div.class = "wrd";
                div.id = i;
                div.style.visibility = "hidden";
                div.innerHTML = this.array[i];
                document.getElementById("word").appendChild(div);
            }
        }


        createKeyboard(){
            this.letters.length = 26;
            let ASCII = 65;
            let but;
            document.getElementById("attemps").innerHTML = this.attemps;
            for (let i = 0; i < this.letters.length; i++) {
                this.letters[i] = String.fromCharCode(ASCII);
                but = document.createElement("button");
                but.innerHTML = this.letters[i];
                but.className= "letters";
                document.getElementById("keyboard").appendChild(but);
                ASCII++;
            }
        }
        
        

        clickButtons(){
            const childs = document.getElementById("keyboard").children;
            const sons = document.getElementById("word").children;
            var cont = 0;
            Array.from(childs).forEach(butt => {
                butt.onclick = ()=>{
                Array.from(sons).forEach(element => {
                    if(element.innerHTML == butt.innerHTML){
                        element.style.visibility = "visible";
                        if(element.style.visibility != "hidden"){
                            cont+=1;
                        }
                        if(cont == this.word.length){
                            document.getElementById("keyboard").style.visibility = "hidden";
                            console.log("Has ganado");
                        }
                    }
                });
                this.attemps--;
                if(this.attemps > 0 || document.getElementById("keyboard").style.visibility == "hidden"){
                    document.getElementById("attemps").innerHTML = this.attemps;
                }else{
                    document.getElementById("attemps").innerHTML = this.attemps;
                    document.getElementById("keyboard").style.visibility = "hidden";
                    console.log("Has perdido");
                }
            }
            });
        }

        reestart(){
            var but = document.getElementById("reestart");
            but.onclick = () =>{
                document.getElementById("keyboard").style.visibility = "visible";
                window.location.reload();
            }
        }
    }
}