# Messenger Scraper

## Français :fr: (English [here](https://github.com/AlexBolot/messenger-scraper/tree/master#english-en))

### 1. Objectif
Ce code JavaScript a pour objecif d'extraire des l'ensemble des photos et vidéos envoyées et reçues dans des disscussions sur Facebook Messenger.

En se basant sur la date d'envoi des photos/vidéos, les fichiers sont renommés avec date et heure. Cela permet de retrouver de façon aproximative le moment auquel a été prise la photo/vidéo

---

### 2. Demander l'historique à Facebook

- Se rendre sur ce lien [facebook.com/dyi/?referrer=yfi_settings](https://www.facebook.com/dyi/?referrer=yfi_settings)

- Sélectionner uniquement les messages

![Selectionner "Messages"](readme-assets/fr/selecting-messages.png)

- Choisir le format JSON et créer le fichier

![Créer la copie](readme-assets/fr/creating-copy.png)

:warning:   Après cette étape il faut attendre de recevoir un  mail de Facebook indiquant que l'archive est prête

---

### 3. Télécharger l'archive

L'archive sera probablement divisée en plusieurs dossiers d'archives `.zip`.

Placez tous les fichiers `.zip` dans le dossier `place-zip-here`.

---

### 4. Lancer le script

Pour utiliser le script vous devez avoir `Node` installé sur votre machine. Trouvable [ici](https://nodejs.org/fr/download/)

Étapes à suivre : 
1. Ouvrir un terminal dans le dossier du projet
2. Taper `npm install`
3. Taper `npm start`

:uk: :us:


## English :uk: :us: 

### 1. Objectif
Ce code JavaScript a pour objecif d'extraire des l'ensemble des photos et vidéos envoyées et reçues dans des disscussions sur Facebook Messenger.

En se basant sur la date d'envoi des photos/vidéos, les fichiers sont renommés avec date et heure. Cela permet de retrouver de façon aproximative le moment auquel a été prise la photo/vidéo

---

### 2. Demander l'historique à Facebook

- Se rendre sur ce lien [facebook.com/dyi/?referrer=yfi_settings](https://www.facebook.com/dyi/?referrer=yfi_settings)

- Sélectionner uniquement les messages

![Selectionner "Messages"](readme-assets/fr/selecting-messages.png)

- Choisir le format JSON et créer le fichier

![Créer la copie](readme-assets/fr/creating-copy.png)

:warning:   Après cette étape il faut attendre de recevoir un  mail de Facebook indiquant que l'archive est prête

---

### 3. Télécharger l'archive

L'archive sera probablement divisée en plusieurs dossiers d'archives `.zip`.

Placez tous les fichiers `.zip` dans le dossier `place-zip-here`.

---

### 4. Lancer le script

Pour utiliser le script vous devez avoir `Node` installé sur votre machine. Trouvable [ici](https://nodejs.org/fr/download/)

Étapes à suivre :
1. Ouvrir un terminal dans le dossier du projet
2. Taper `npm install`
3. Taper `npm start`
