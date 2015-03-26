##  Angular demo
This is a calendar, a little app to play with angular.
### How to build
1. Clone this project
2. Run `pm install`
3. Run `bower install`
4. Run `grunt build`

**And if you just want to see it working, [click here !](eprevot.github.io/calendar)

###These were the original instructions
#####  Test Front End Developer @ Doctolib
Coder en pur Javascript une classe qui permet d'afficher un agenda en vue semaine qui affiche les événements qui lui sont passés en argument.
``` javascript
new Calendar('#calendar-wrapper', new Date(2014, 9, 6),
  [
    {start_date: new Date(2014, 9, 8, 9, 30), end_date: new Date(2014, 9, 8, 14, 0), title: 'Al Di Meola'},
    {start_date: new Date(2014, 9, 10, 9, 15), end_date: new Date(2014, 9, 10, 12, 30), title: 'Paco De Lucia'},
    {start_date: new Date(2014, 9, 10, 12, 0), end_date: new Date(2014, 9, 10, 15, 30), title: 'John McLaughlin'},
    {start_date: new Date(2014, 9, 10, 15, 0), end_date: new Date(2014, 9, 10, 18, 30), title: 'Django Reinhardt'}
  ]
)
```
Le résultat de l'appel ci-dessus doit ressembler à peu près au screenshot ci-dessous.
L'agenda doit s'adapter aux dimensions de l'élément englobant. Le placement des événements doit gérer le chevauchement (pas nécessairement de la même façon que le screenshot).
Il faut livrer le js et le css qui s'intègrent au fichier index.html de ce gist ainsi que les éventuels fichiers source si il y a lieu (coffee, less, sass, ...).
