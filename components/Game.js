AFRAME.registerComponet("game-play",{
    schema:{
        elementId : {type: "string", default: "#ring1"}
    },

    isCollided:function(elementId){
        const element = document.querySelector(elementId)

        element.addEventListener("collide", e=>{
        //includes() finds whether the one string is the part of the other string value

        if(elementId.includes("#ring")){
            console.log(elementId+"collision")
        }
        else if(elementId.includes("#bird")){
            console.log(elementId+"collision")
        }
        })
    },
    update:function(){
        this.isCollided(ths.data.elementId)
    }
})