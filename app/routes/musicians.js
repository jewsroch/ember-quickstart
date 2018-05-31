import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['David Bowie', 'Prince', 'Freddie Mercury']
  }
});
