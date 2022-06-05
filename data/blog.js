blogs = {
    title:"titulo del blog",

    menu:[
        {link:"home", name:"home"},
        {link:"info", name:"info"},
        {link:"aboutMe", name:"about me"},
        {link:"new", name:"noticias"},
        {link:"contacto", name:"contacto"},
        {link:"blog", name:"posts"}
    ],
    social:[
       {icon:"fb.jpg", title:"Facebook",url:"https://www.facebook.com/"},
       {icon:"tw.jpg",title:"Twitter", url:"https://twitter.com"},
       {icon:"insta.jpg", title:"Instagram",url:"https://instagram.com"}

    ],
    sections:[
        {
         name:"contacto",
         content: `
          <h2>Hola</h2>
          Hola esta es la section <b>Contacto</b>
         `,
        },

        {
            name:"new",
            content: `
             <h2>Hola</h2>
             Hola esta es la section <b>Noticias</b>
            `,
        },

        {
            name:"info",
            content: `
             <h2>Hola</h2>
             <br/>
             <br/>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
             <br/>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
             <br/>
            `,
        },
    ],

    aboutMe:{
        text:` 
          <h1>Blog personal</h1>
          <p>Este es la descriptcion de un <i>blog personal</i></p>
        `,
    },

    posts:[
           {
            id: 0,
            description:'descrption 1',
            title:`<h3>titulo del articulo 1</h3>`,
            content:`
             <br>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
            `,
            tags:'blog, post, texto',
            img:'img1.jpg',
            level:'1'
          },

          {
            id: 1,
            description:'descrption 2',
            title:`<h3>titulo del articulo 2</h3>`,
            content:`
             <br>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
            `,
            tags:'blog, post, texto',
            img:'img2.jpg',
            level:'3'
          },
          {
            id: 3,
            description:'descrption 3',
            title:`<h3>titulo del articulo 3</h3>`,
            content:`
             <br>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
            `,
            tags:'blog, post, texto',
            img:'img2.jpg',
            level:'2'
          },

          {
            id: 4,
            description:'descrption 4',
            title:`<h3>titulo del articulo 4</h3>`,
            content:`
             <br>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
            `,
            tags:'blog, post, texto',
            img:'img1.jpg',
            level:'20'
          },
          {
            id: 5,
            description:'descrption 4',
            title:`<h3>titulo del articulo 4</h3>`,
            content:`
             <br>
             <p>
             Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts o
              f Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
             </p>
            `,
            tags:'blog, post, texto',
            img:'img2.jpg',
            level:'30'
          },

        ]

    

    
}