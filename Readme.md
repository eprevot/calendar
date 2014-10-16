## Agenda pleine page
Coder en pur Javascript une classe qui permet d'afficher un agenda en vue semaine qui affiche les événements qui lui sont passés en argument.
``` javascript
new Calendar('.calendar-wrapper', new Date(2014, 9, 6),
  [
    {start_date: new Date(2014, 9, 8, 9, 30), end_date: new Date(2014, 9, 8, 10, 0)},
    {start_date: new Date(2014, 9, 10, 15, 15), end_date: new Date(2014, 9, 10, 15, 30)}
  ]
)
```
