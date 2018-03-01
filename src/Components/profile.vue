<template lang="pug">
    div#profile
        div.left_side
            img(src="https://cdn2.mhpbooks.com/2018/02/zDo-gAo0_400x400-320x320.jpg")
            a.link(type="button" href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank") {{text}}
        div.right_side
            h1 {{title}}
            p(v-for="biography in biographies") {{biography}}

</template>

<script>
export default {
   data() {
       return {
            text: "Elon Musk in Wikipedia",
            title: "Elon Musk",
            biographies: [
                'Elon Reeve Musk (born June 28, 1971) is a South African-born American business magnate, investor, engineer and inventor. He is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; and chairman of SolarCity.',
                'In 2001, Musk conceptualized "Mars Oasis"; a project to land a miniature experimental greenhouse on Mars, containing food crops growing on Martian regolith, in an attempt to regain public interest in space exploration.',
                'Musk provided the initial concept and financial capital for SolarCity, which was then co-founded in 2006 by his cousins Lyndon and Peter Rive. By 2013, SolarCity was the second largest provider of solar power systems in the United States. SolarCity was acquired by Tesla, Inc. in 2016 and is currently a wholly owned subsidiary of Tesla.',
                'On August 12, 2013, Musk unveiled a concept for a high-speed transportation system incorporating reduced-pressure tubes in which pressurized capsules ride on an air cushion driven by linear induction motors and air compressors.'
            ]
       }
   }
    
}
</script>
 
<style lang="scss">
    @import '../styles/_reset.scss';
    @import '../styles/_var.scss';

    #profile {
        display: flex;
        flex-flow: row nowrap;
        width: 90%;
        height: 500px;
        margin-top: 20px;
        margin-left: 5%;
        margin-right: 5%;
        justify-content: center;
        align-items: center;
        background-image: url("http://s1.1zoom.me/b5050/149/Milky_Way_Stars_Sky_456508_3840x2400.jpg");
        background-position: center;
        background-size: cover;

        .left_side {
            display: flex;
            flex-flow: column nowrap;
            width: 30%;
            height: 90%;
            margin-top: 20px;
            justify-content: flex-start;
            align-items: center;
            
            .link {
                color: $second_red;
                font-weight: bold;
                margin-top: 15px;
            }

            img { 
                width: 70%;
                border-radius: 50%;
            }
        }
        .right_side {
            display: flex;
            flex-flow: column nowrap;
            width: 65%;
            height: 90%;
            justify-content: flex-start;
            align-items: center;
            @include padding(2%,2%);
            text-indent: 20px;
            text-align: justify;

            h1 {
                color: $light_purple;
            }

            p {
                margin-top: 2px;
                margin-bottom: 5px;
                
            }
        }

    }
.left_side a:hover{
    opacity: 0.7;
}

</style>
