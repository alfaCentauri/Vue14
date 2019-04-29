/* 
    Created on : 31/01/2019, 11:11:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Agranda el texto
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

var vue = new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
        { id: 1, title: 'Prueba de componentes',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 1'
        },
        { id: 2, title: 'Blogging con Vue',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 2'
        },
        { id: 3, title: 'Porque es util un componente',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 3'
        }
    ],
    postFontSize: 1
  }
});

var vue2 = new Vue({
  el: '#blog-posts-events-demo2',
  data: {
    posts: [
        { id: 1, title: 'Prueba de componentes',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 1'
        },
        { id: 2, title: 'Blogging con Vue',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 2'
        },
        { id: 3, title: 'Porque es util un componente',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 3'
        }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
});

