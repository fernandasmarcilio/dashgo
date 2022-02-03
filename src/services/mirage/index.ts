import { createServer, Factory, Model } from 'miragejs'
import faker from '@faker-js/faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({

    models: {
      user: Model.extend<Partial<User>>({})
    },

    // fabrica de dados 
    factories: {
      user: Factory.extend({
        name(index) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    // criação dos dados, para o user vai ser gerado 200 usuários
    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }

  })

  return server;
}