import Ember from 'ember';

var questions = [{
  author: "Micheal Scott",
  question: "Can a family live decently well in Portland, Oregon on $115k? In the city itself?",
  content: "living wages in Portland, OR",
  notes: ""
}, {
  author: "Leslie Knope",
  question: "How did Ice Cube get his name?",
  content: "Ice cube",
  notes: "Ice cube the musical artist, not ice cubes(cubes of ice)"
}, {
  author: "Rip Rocket",
  question: "Do you use a different name at Starbucks (as some people do)?",
  content: "general curiosities about the human experience",
  notes: "if yes, why?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
