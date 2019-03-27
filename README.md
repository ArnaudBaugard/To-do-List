# To-do-List

Voici mon projet To-Do-List.

## Base de données.
Je vous ai donné un fichier todo-list.sql contenant les différents tables à avoir.

Le nom de la base : todo-list

Le nom de la table : task

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=57 ;


## Fonctionnalités

Voici la liste des différentes fonctionnalités présentes :
* Affichage des tâches
* Ajout des tâches
* Modification des tâches (et de la date)
* Suppression des tâches
* Un service reprenant les 3 fonctionnalités précédentes
* Pop up de confirmation de suppression
* Fonctionnalités en AJAX


Merci d'avoir lu jusqu'ici, et bon courage !
