# Messenger Scraper

## :fr: Français

### 1. :bulb: Objectif
Ce code JavaScript a pour objecif d'extraire des l'ensemble des photos et vidéos envoyées et reçues dans des disscussions sur Facebook Messenger.

En se basant sur la date d'envoi des photos/vidéos, les fichiers sont renommés avec date et heure. Cela permet de retrouver de façon aproximative le moment auquel a été prise la photo/vidéo

### 2. :satellite: Demander l'historique à Facebook

- Se rendre sur ce lien [facebook.com/dyi/?referrer=yfi_settings](https://www.facebook.com/dyi/?referrer=yfi_settings)

- Sélectionner uniquement les messages

![Selectionner "Messages"](readme-assets/fr/selecting-messages.png)

- Choisir le format JSON et créer le fichier

![Créer la copie](readme-assets/fr/creating-copy.png)

:warning:   Après cette étape il faut attendre de recevoir un  mail de Facebook indiquant que l'archive est prête

### 3. :floppy_disk: Télécharger l'archive

Elle peut être divisée en plusieurs archives `.zip`. Il faut les télécharger et les extraire.

Dans chaque archive il faut récupérer le dossier `messages`, contenant `archived_threads` et `inbox`

```
messages
│─ archived_threads
│   │- ...
│   └─ ... 
└─ inbox   
    │- ...
    └─ ... 
```

### 4. :file_cabinet: Assembler les conversations

Sous mac, utilisez la commande `rsync -av path/orgigin path/destination` sur chaque dossier d'archive pour regrouper les `inbox` ensemble et les `archived_threads` ensemble.

:fr: :uk: :us:
