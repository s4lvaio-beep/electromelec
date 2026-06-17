// ═══════════════════════════════════════════
//  DONNÉES — ElectroMELEC Polynésie française
// ═══════════════════════════════════════════

// URL du script Google Sheets pour recevoir les résultats QCM
var SHEET_URL = "https://script.google.com/macros/s/AKfycbyZS9qhgAWygyd1niTpwLUs1Lvbq3cQYM2Ywmakqm8J8kwp_EOOT2AmZtUxkSTIhaHSmA/exec";

// Mot de passe espace professeur
var PROF_PASSWORD = "Raiatea987";

// ═══ COURS ═══
var cours = [
  {tag:'B1',tc:'tb1',title:'Analyser le besoin et identifier les solutions',
   desc:'Lecture de schémas, identification des matériels et fonctions dans une installation électrique.',
   pf:'Exemples basés sur des installations résidentielles typiques de Tahiti et des îles Sous-le-Vent.',
   level:'2nde Pro',lk:'2nde',
   content:'<h3>📘 Analyser le besoin et identifier les solutions</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Avant toute intervention électrique, il faut comprendre le besoin du client : habitat individuel (fare ou maison maçonnée), local commercial, pension de famille, ou petit hôtel.</p><h4>Démarche d\'analyse</h4><ul><li>Identifier le type de bâtiment et son usage</li><li>Repérer les contraintes du site : exposition au vent, proximité du littoral (corrosion saline), accès réseau EDT</li><li>Lire les schémas électriques existants (unifilaire, multifilaire)</li><li>Identifier les normes applicables (NF C 15-100, adaptée localement)</li></ul><h4>Spécificités locales à prendre en compte</h4><ul><li>Many installations sont mixtes : réseau EDT + production solaire en autoconsommation</li><li>Proximité de la mer → choix de matériel résistant à la corrosion (IP65 minimum recommandé en extérieur)</li><li>Habitat traditionnel (fare) : structure légère, often en bois/pandanus, nécessitant des fixations adaptées</li></ul>'},

  {tag:'B1',tc:'tb1',title:'Décoder les documents techniques',
   desc:'Plans d\'implantation, schémas unifilaires et multifilaires, notes de calcul.',
   pf:'Plans types de résidences et structures touristiques polynésiennes (bungalows, fare).',
   level:'1ère Pro',lk:'1ere',
   content:'<h3>📘 Décoder les documents techniques</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Les chantiers en Polynésie incluent souvent des structures spécifiques : bungalows sur pilotis, fare traditionnels, résidences avec toiture en tôle ou pandanus.</p><h4>Documents à maîtriser</h4><ul><li>Schéma unifilaire : vue simplifiée d\'un seul trait par circuit</li><li>Schéma multifilaire : tous les conducteurs représentés (utile en dépannage)</li><li>Plan d\'implantation : emplacement des appareillages dans le bâtiment</li><li>Note de calcul : section de câbles, protections, chute de tension</li></ul><h4>Cas pratique polynésien</h4><p>Un bungalow d\'hôtel sur pilotis nécessite un cheminement de câbles étanche entre le tableau principal terrestre et chaque unité, avec attention particulière à l\'IP des boîtiers de jonction exposés à l\'air marin.</p>'},

  {tag:'B2',tc:'tb2',title:'Préparer la réalisation d\'un ouvrage',
   desc:'Approvisionnement, outillage, EPI, prise en compte des risques professionnels.',
   pf:'Gestion logistique du matériel dans un contexte insulaire (délais d\'approvisionnement).',
   level:'2nde Pro',lk:'2nde',
   content:'<h3>📘 Préparer la réalisation d\'un ouvrage</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>En Polynésie, l\'approvisionnement en matériel électrique peut prendre plusieurs semaines pour les îles éloignées (Marquises, Australes), ce qui impose une anticipation rigoureuse.</p><h4>Préparation du chantier</h4><ul><li>Lister précisément le matériel nécessaire (anticiper les délais bateau/avion)</li><li>Vérifier la disponibilité chez les fournisseurs locaux (Tahiti vs îles éloignées)</li><li>Prévoir l\'outillage adapté au climat (corrosion sur outils métalliques)</li><li>EPI obligatoires : gants isolants, chaussures de sécurité, casque si chantier extérieur</li></ul><h4>Risques spécifiques</h4><ul><li>Travail en hauteur sur toiture (chaleur, UV intense)</li><li>Risque électrique aggravé par l\'humidité ambiante</li><li>Saison cyclonique (nov-avril) : anticiper les reports de chantier extérieur</li></ul>'},

  {tag:'B2',tc:'tb2',title:'Réaliser une installation en habitat',
   desc:'Pose de câbles, appareillage, raccordement tableaux électriques résidentiels.',
   pf:'Adaptations pour fare traditionnel et logement social polynésien (résistance à l\'humidité).',
   level:'1ère Pro',lk:'1ere',
   content:'<h3>📘 Réaliser une installation en habitat</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>L\'habitat en Polynésie va du fare traditionnel en matériaux locaux (bois, pandanus, niau) aux logements sociaux et villas modernes en parpaing.</p><h4>Spécificités de pose</h4><ul><li>Fare traditionnel : fixation sur structure bois, attention à la résistance mécanique des supports</li><li>Logement maçonné : pose classique en saignée ou apparente selon le cas</li><li>Toujours privilégier du matériel certifié IP44 minimum, IP65 en zone exposée</li><li>Mise à la terre primordiale : sol souvent corallien (résistivité variable)</li></ul><h4>Tableau électrique</h4><ul><li>Disjoncteur différentiel 30mA obligatoire</li><li>Protection parafoudre recommandée (orages fréquents en saison humide)</li><li>Choix de boîtiers étanches pour tableaux extérieurs ou semi-extérieurs (cuisine extérieure traditionnelle)</li></ul>'},

  {tag:'B2',tc:'tb2',title:'Installations industrielles & tertiaires',
   desc:'Chemins de câbles, armoires de distribution, départs moteurs, appareillage industriel.',
   pf:'Infrastructures hôtelières, ports, unités de production locales (perliculture, agroalimentaire).',
   level:'Terminale',lk:'term',
   content:'<h3>📘 Installations industrielles & tertiaires</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Le secteur tertiaire polynésien est dominé par l\'hôtellerie et les infrastructures portuaires. L\'industriel inclut la perliculture, les unités agroalimentaires et les stations de pompage.</p><h4>Spécificités hôtelières</h4><ul><li>Armoires de distribution dimensionnées pour forte charge climatisation</li><li>Chemins de câbles aériens et enterrés résistants à la corrosion saline</li><li>Groupes électrogènes de secours fréquents (continuité de service touristique)</li></ul><h4>Spécificités industrielles locales</h4><ul><li>Stations de pompage (eau douce, bassins de perliculture) : départs moteurs avec protection adaptée à l\'humidité</li><li>Unités de traitement agroalimentaire : normes hygiène + étanchéité du matériel électrique</li></ul>'},

  {tag:'B3',tc:'tb3',title:'Mettre en service une installation',
   desc:'Essais, mesures, vérifications avant mise sous tension. Appareils de mesure.',
   pf:'Procédures de contrôle adaptées aux conditions climatiques locales.',
   level:'1ère Pro',lk:'1ere',
   content:'<h3>📘 Mettre en service une installation</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>La mise en service doit intégrer un contrôle renforcé de l\'isolement, l\'humidité ambiante pouvant fausser certaines mesures si elles sont mal réalisées.</p><h4>Étapes de vérification</h4><ul><li>Contrôle visuel complet (serrage, repérage, conformité)</li><li>Mesure de la résistance d\'isolement (attention à l\'humidité résiduelle après pose)</li><li>Vérification de la continuité des liaisons équipotentielles et de terre</li><li>Test du différentiel 30mA (bouton test)</li><li>Mesure de la tension et contrôle de phase avant mise sous tension définitive</li></ul><h4>Particularité locale</h4><p>En saison humide, il est recommandé de laisser sécher l\'installation avant le test d\'isolement final, ou de répéter la mesure à distance de quelques heures.</p>'},

  {tag:'B3',tc:'tb3',title:'Mise en service automatismes',
   desc:'API (Zelio, S7-1200), programmation Ladder, test et validation des automatismes.',
   pf:'Automatisation de systèmes de pompage et gestion énergétique solaire.',
   level:'Terminale',lk:'term',
   content:'<h3>📘 Mise en service automatismes</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Les automatismes en Polynésie sont très utilisés pour la gestion de pompage (eau, bassins) et la gestion intelligente de l\'énergie solaire couplée au réseau EDT.</p><h4>Applications locales courantes</h4><ul><li>Automatisation de pompes de relevage (lutte contre inondation, gestion eaux pluviales)</li><li>Gestion automatique de basculement réseau EDT / groupe électrogène / solaire</li><li>Programmation Ladder pour cycles de filtration de piscines et bassins hôteliers</li></ul><h4>Méthode de mise en service</h4><ul><li>Vérification du câblage entrées/sorties API</li><li>Test des capteurs (niveau d\'eau, détection de coupure réseau)</li><li>Validation du GRAFCET en mode pas-à-pas avant passage en automatique</li></ul>'},

  {tag:'B4',tc:'tb4',title:'Maintenir en condition opérationnelle',
   desc:'Diagnostic de pannes, maintenance préventive et corrective.',
   pf:'Maintenance préventive renforcée du fait du climat tropical humide.',
   level:'Terminale',lk:'term',
   content:'<h3>📘 Maintenir en condition opérationnelle</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Le climat tropical humide et l\'air marin accélèrent fortement la dégradation des installations électriques en Polynésie : oxydation des contacts, corrosion des boîtiers métalliques, infiltration d\'humidité.</p><h4>Maintenance préventive spécifique</h4><ul><li>Contrôle visuel renforcé des points de connexion (oxydation)</li><li>Vérification des joints d\'étanchéité des boîtiers IP</li><li>Nettoyage des panneaux solaires (dépôts salins réduisant le rendement)</li><li>Test périodique des protections différentielles</li></ul><h4>Diagnostic de pannes fréquentes en PF</h4><ul><li>Disjonctions répétées dues à l\'humidité dans les boîtiers de jonction</li><li>Faux contacts liés à la corrosion des bornes</li><li>Dégradation prématurée de matériel non certifié pour climat tropical</li></ul>'},

  {tag:'B1',tc:'tb1',title:'Domotique et bâtiment connecté',
   desc:'Protocoles KNX, Bus 2 fils, variation d\'éclairage, gestion des volets.',
   pf:'Gestion automatisée de la climatisation et des volets dans l\'hôtellerie de luxe polynésienne.',
   level:'1ère Pro',lk:'1ere',
   content:'<h3>📘 Domotique et bâtiment connecté</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>L\'hôtellerie haut de gamme (resorts, bungalows sur pilotis) utilise largement la domotique pour le confort client et la gestion énergétique.</p><h4>Applications fréquentes en PF</h4><ul><li>Gestion centralisée de la climatisation par chambre (économie d\'énergie)</li><li>Pilotage automatique des volets/stores selon ensoleillement</li><li>Détection de présence pour couper l\'éclairage et la clim en absence</li><li>Interfaces simplifiées pour le personnel d\'entretien multilingue</li></ul><h4>Protocoles utilisés</h4><ul><li>KNX pour les installations hôtelières structurées</li><li>Solutions sans fil (EnOcean, Zigbee) pour la rénovation de bungalows existants sans gros travaux</li></ul>'},

  {tag:'B3',tc:'tb3',title:'Énergie solaire photovoltaïque',
   desc:'Dimensionnement PV, onduleurs, stockage, raccordement au réseau.',
   pf:'Très fort potentiel solaire en Polynésie — autoconsommation et sites isolés.',
   level:'Terminale',lk:'term',
   content:'<h3>📘 Énergie solaire photovoltaïque</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>La Polynésie française bénéficie d\'un ensoleillement exceptionnel (5 à 6h de soleil exploitable par jour en moyenne), ce qui en fait un territoire pilote pour l\'autoconsommation solaire.</p><h4>Deux configurations principales</h4><ul><li><strong>Raccordé réseau EDT</strong> : autoconsommation avec ou sans injection du surplus</li><li><strong>Site isolé</strong> : motu, stations isolées, nécessitant batteries de stockage</li></ul><h4>Contraintes locales</h4><ul><li>Fixations renforcées anti-cyclone (vent fort en saison humide)</li><li>Nettoyage régulier requis (sel marin, poussière)</li><li>Câblage et connecteurs résistants aux UV intenses</li><li>Dimensionnement batterie crucial pour les sites hors réseau</li></ul>'},

  {tag:'B2',tc:'tb2',title:'Habilitation électrique',
   desc:'Niveaux B0,B1,B2,BR,BC — procédures de consignation, zones de travail.',
   pf:'Procédures identiques au national, vigilance accrue liée à l\'humidité ambiante.',
   level:'2nde Pro',lk:'2nde',
   content:'<h3>📘 Habilitation électrique</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Les règles d\'habilitation NF C 18-510 s\'appliquent intégralement en Polynésie française. La vigilance doit être renforcée en raison de l\'humidité ambiante qui dégrade la résistance des EPI plus rapidement.</p><h4>Points de vigilance locaux</h4><ul><li>Contrôle systématique de l\'état des gants isolants (dégradation accélérée par chaleur/humidité)</li><li>Stockage des EPI dans des conditions adaptées (éviter l\'humidité directe)</li><li>VAT (Vérification d\'Absence de Tension) essentielle avant toute intervention, l\'humidité augmentant les risques de défaut d\'isolement</li></ul>'},

  {tag:'B4',tc:'tb4',title:'Moteurs électriques & variateurs',
   desc:'MCC, moteurs asynchrones, démarreurs étoile-triangle, variateurs de vitesse.',
   pf:'Pompes de relevage, groupes de climatisation centralisée, perliculture.',
   level:'Terminale',lk:'term',
   content:'<h3>📘 Moteurs électriques & variateurs</h3><span class="pf-tag">🌴 Contexte Polynésie française</span><p>Les moteurs électriques en PF sont massivement utilisés pour le pompage (eau douce, bassins de perliculture, relevage eaux pluviales) et les groupes de climatisation centralisée.</p><h4>Applications locales</h4><ul><li>Pompes de relevage : protection IP renforcée, démarrage adapté à la charge hydraulique</li><li>Groupes de climatisation hôtelière : variateurs de vitesse pour économie d\'énergie</li><li>Moteurs de bassins perlicoles : fonctionnement continu, maintenance préventive cruciale</li></ul><h4>Choix du démarrage</h4><ul><li>Variateur de fréquence recommandé pour les pompes (économie d\'énergie + démarrage progressif anti coup de bélier)</li><li>Étoile-triangle pour moteurs moyens sans contrainte de démarrage doux</li></ul>'},
];

// ═══ QCM contextualisés Polynésie française ═══
var qdata = {
  elec:[
    {q:"Tension nominale du réseau monophasé géré par EDT en Polynésie française ?",o:["110V","230V","400V","24V"],c:1,e:"Le réseau monophasé en Polynésie française est de 230V, identique à la métropole (NF EN 60038)."},
    {q:"La loi d'Ohm exprime la relation entre :",o:["Puissance, tension et fréquence","Tension, intensité et résistance","Courant, puissance et inductance","Résistance, impédance et réactance"],c:1,e:"U = R × I. La tension est égale à la résistance multipliée par l'intensité."},
    {q:"Pour une installation en bord de mer en Polynésie, quel indice de protection minimal est recommandé en extérieur ?",o:["IP20","IP44","IP65","IP10"],c:2,e:"En zone exposée à l'air marin et aux embruns, un IP65 minimum est recommandé pour limiter la corrosion et les infiltrations."},
    {q:"Unité de la puissance apparente ?",o:["Watt (W)","Var (VAr)","Volt-ampère (VA)","Joule (J)"],c:2,e:"La puissance apparente S s'exprime en VA. P active en W, P réactive en VAr."},
    {q:"Le cos φ représente :",o:["Le rendement du moteur","Le facteur de puissance","La chute de tension","L'inductance du circuit"],c:1,e:"Le cos φ est le facteur de puissance, rapport entre puissance active (W) et apparente (VA)."},
    {q:"Pour mesurer une intensité, l'ampèremètre se branche :",o:["En parallèle","En série","Entre phase et neutre","Sur la prise de terre"],c:1,e:"L'ampèremètre se branche TOUJOURS en série dans le circuit."},
    {q:"Tension entre deux phases d'un réseau triphasé 230V/400V en Polynésie ?",o:["230V","315V","400V","690V"],c:2,e:"400V est la tension entre deux phases. 230V est entre une phase et le neutre."},
    {q:"Pourquoi l'humidité ambiante de Polynésie complique-t-elle les mesures d'isolement ?",o:["Elle n'a aucun effet","Elle peut fausser temporairement la résistance d'isolement mesurée","Elle augmente la tension du réseau","Elle empêche tout test"],c:1,e:"L'humidité résiduelle après pose peut réduire artificiellement la résistance mesurée ; il est conseillé de re-tester après séchage."},
    {q:"Un conducteur 2,5 mm² en cuivre protège classiquement :",o:["Circuit éclairage 10A","Circuit prises 16A","Circuit moteur 32A","Circuit 63A"],c:1,e:"Le 2,5mm² protège les circuits prises jusqu'à 16A, conformément à la norme appliquée localement."},
    {q:"Fréquence du réseau électrique géré par EDT en Polynésie française :",o:["50 Hz","60 Hz","100 Hz","25 Hz"],c:0,e:"Le réseau polynésien fonctionne à 50 Hz, comme en métropole."},
  ],
  hab:[
    {q:"L'habilitation BR correspond à :",o:["Travaux hors tension simple","Chargé de consignation","Chargé d'interventions générales","Surveillance électrique"],c:2,e:"BR = Chargé d'interventions générales (remplacement, raccordement sous tension)."},
    {q:"Pourquoi le contrôle des EPI doit-il être renforcé en Polynésie ?",o:["Les EPI sont moins chers","La chaleur et l'humidité dégradent plus vite les gants isolants","Ce n'est pas nécessaire","Les normes sont différentes"],c:1,e:"Le climat tropical accélère le vieillissement des matériaux isolants, nécessitant un contrôle plus fréquent."},
    {q:"Nombre d'étapes de consignation :",o:["2","3","4","5"],c:2,e:"4 étapes : Séparation, Condamnation, VAT, MALT+MCC."},
    {q:"L'habilitation H1 concerne :",o:["Domaine BT","Domaine HTA","Domaine HTB","TBT"],c:1,e:"H = Haute Tension. H1 = exécutant en HTA, présente sur le réseau de distribution insulaire."},
    {q:"EPI indispensable pour une VAT en BT :",o:["Casque de chantier","Gants isolants","Chaussures de sécurité","Gilet fluorescent"],c:1,e:"Les gants isolants sont l'EPI fondamental pour toute intervention sous tension."},
    {q:"Un B0 peut :",o:["Faire des travaux électriques sous tension","Effectuer une VAT","Travailler à proximité sous surveillance","Consigner un ouvrage"],c:2,e:"Le B0 peut travailler à proximité sous surveillance d'un habilité BS ou B1."},
    {q:"Document autorisant les travaux sur ouvrage consigné :",o:["Ordre de travail","Attestation de consignation","Avis de fin de travaux","Titre d'habilitation"],c:1,e:"L'attestation de consignation est remise par le chargé de consignation avant les travaux."},
    {q:"La VAT doit se faire :",o:["Avant la mise à la terre","Après la mise à la terre","Sans EPI si en BT","Une seule fois par jour"],c:0,e:"La VAT s'effectue AVANT la mise à la terre, avec les EPI appropriés."},
    {q:"Le symbole ⚡ sur un équipement signifie :",o:["Courant alternatif","Danger électrique","Mise à la terre","Courant continu"],c:1,e:"L'éclair dans un triangle indique un danger électrique (pièces sous tension)."},
    {q:"Sur un chantier extérieur en saison cyclonique, quelle précaution professionnelle est essentielle ?",o:["Aucune précaution particulière","Surveiller les alertes météo et reporter si besoin","Travailler plus vite pour finir avant la pluie","Ignorer les bulletins météo"],c:1,e:"En saison cyclonique (nov-avril), la surveillance des bulletins météo locaux fait partie de la préparation du chantier."},
  ],
  auto:[
    {q:"Un GRAFCET est :",o:["Un langage informatique","Un outil graphique pour automatismes séquentiels","Un schéma de câblage","Un protocole industriel"],c:1,e:"Le GRAFCET décrit les automatismes séquentiels (norme NF EN 60848)."},
    {q:"Dans une station de pompage automatisée, quel capteur déclenche typiquement le démarrage ?",o:["Capteur de température","Détecteur de niveau d'eau","Capteur de luminosité","Détecteur de fumée"],c:1,e:"Le détecteur de niveau d'eau pilote le démarrage/arrêt des pompes de relevage ou de bassin."},
    {q:"En LADDER, le contact normalement fermé est :",o:["[| |]","[|/|]","( )","{ }"],c:1,e:"Le contact NF est représenté par /| en LADDER."},
    {q:"Une sortie TOR d'un API peut prendre :",o:["N'importe quelle valeur","2 états : 0 ou 1","4 états","16 états"],c:1,e:"TOR = Tout Ou Rien. Sortie binaire : 0 ou 1."},
    {q:"Pour basculer automatiquement entre réseau EDT et groupe électrogène en cas de coupure, on utilise :",o:["Un simple interrupteur manuel","Un système de gestion automatique de source (ATS) piloté par API","Un disjoncteur différentiel uniquement","Aucun équipement particulier"],c:1,e:"Un automate ou ATS (Automatic Transfer Switch) détecte la coupure et bascule automatiquement vers la source de secours."},
    {q:"Le capteur de niveau utilisé en bassin de perliculture doit être :",o:["Sensible uniquement à la lumière","Résistant à l'eau salée","Sans aucune protection","Uniquement mécanique"],c:1,e:"En milieu marin/perlicole, les capteurs doivent résister à la corrosion de l'eau salée."},
    {q:"La temporisation TON :",o:["Décompte avant de désactiver","Active la sortie après un délai","Active immédiatement puis temporise","Ne fonctionne qu'en DC"],c:1,e:"TON : la sortie s'active après un délai T depuis le front montant de l'entrée."},
    {q:"PROFIBUS DP est basé sur :",o:["Ethernet","RS-485","CAN","Modbus TCP"],c:1,e:"PROFIBUS DP utilise RS-485 avec une structure maître-esclave."},
  ],
  domo:[
    {q:"Le protocole KNX utilise comme support principal :",o:["Wi-Fi","Câble bus 2 fils (TP)","Fibre optique","CPL"],c:1,e:"KNX TP utilise un câble bus 2 fils pour données et alimentation (29V DC)."},
    {q:"Dans un bungalow d'hôtel sur pilotis, quelle solution domotique est privilégiée pour éviter de gros travaux ?",o:["Câblage KNX filaire complet","Solutions sans fil (EnOcean, Zigbee)","Aucune domotique possible","Câblage Ethernet uniquement"],c:1,e:"Les solutions sans fil évitent de percer/saigner les structures existantes des bungalows, souvent en matériaux légers."},
    {q:"Le logiciel de programmation KNX s'appelle :",o:["PL7 Pro","ETS","Step7","Unity Pro"],c:1,e:"ETS (Engineering Tool Software) est l'outil officiel de la KNX Association."},
    {q:"Dans l'hôtellerie polynésienne, la détection de présence couplée à la climatisation sert principalement à :",o:["Décorer la chambre","Réduire la consommation énergétique en absence du client","Surveiller les clients","Remplacer le personnel"],c:1,e:"Couper automatiquement la climatisation en l'absence du client génère des économies d'énergie significatives."},
    {q:"Le VDI désigne :",o:["Un système de vidéosurveillance","Le câblage réseau structuré","Un protocole domotique","Un type de capteur"],c:1,e:"VDI regroupe les réseaux RJ45, fibre, TV, téléphonie (NF EN 50173)."},
    {q:"La GTB permet de :",o:["Gérer uniquement l'éclairage","Superviser tous les équipements techniques","Remplacer le tableau électrique","Contrôler uniquement le chauffage"],c:1,e:"La GTB centralise la supervision de tous les équipements d'un bâtiment, utile pour la gestion énergétique hôtelière."},
    {q:"EnOcean se distingue par :",o:["Sa vitesse élevée","Ses composants sans fil et sans pile","Sa compatibilité IP exclusive","Son câblage en étoile"],c:1,e:"EnOcean récupère l'énergie ambiante pour alimenter ses émetteurs sans pile, idéal en rénovation."},
    {q:"Le détecteur IRP détecte :",o:["Les variations de luminosité","Le mouvement par variation de chaleur","Les vibrations","Le bris de vitre"],c:1,e:"Le PIR détecte les corps chauds en mouvement par variation infrarouge."},
  ],
  solaire:[
    {q:"Quel est l'ensoleillement moyen exploitable par jour en Polynésie française ?",o:["1 à 2h","5 à 6h","10 à 12h","Aucun ensoleillement"],c:1,e:"La Polynésie bénéficie d'un ensoleillement exceptionnel de 5 à 6h exploitables par jour en moyenne."},
    {q:"Sur un site isolé (motu) sans accès au réseau EDT, quel équipement est indispensable ?",o:["Onduleur réseau uniquement","Batteries de stockage","Aucun équipement supplémentaire","Compteur EDT"],c:1,e:"Sans réseau, les batteries stockent l'énergie produite le jour pour une utilisation la nuit ou par temps couvert."},
    {q:"Pourquoi les fixations de panneaux solaires doivent-elles être renforcées en Polynésie ?",o:["Pour le style architectural","En raison des vents cycloniques (nov-avril)","Pour réduire les coûts","Ce n'est pas nécessaire"],c:1,e:"La saison cyclonique impose des fixations capables de résister à de fortes rafales de vent."},
    {q:"Le Performance Ratio (PR) d'une installation PV représente :",o:["Le prix du système","Le rapport entre énergie réelle produite et énergie théorique maximale","La durée de vie des panneaux","La puissance crête uniquement"],c:1,e:"Le PR (souvent 0,75 à 0,85) tient compte des pertes réelles (température, câblage, salissures...)."},
    {q:"Pourquoi nettoyer régulièrement les panneaux solaires en bord de mer ?",o:["Pour l'esthétique uniquement","Le sel marin et la poussière réduisent le rendement","Ce n'est jamais nécessaire","Pour les recharger"],c:1,e:"Les dépôts salins et la poussière créent un écran qui réduit la captation de lumière par les cellules."},
    {q:"Pour une installation raccordée au réseau EDT avec autoconsommation, le surplus produit peut être :",o:["Toujours perdu","Injecté sur le réseau selon le contrat souscrit","Stocké uniquement dans le sol","Détruit automatiquement"],c:1,e:"Selon le type de contrat avec EDT, le surplus peut être injecté sur le réseau ou simplement non utilisé."},
  ],
};

// ═══ FICHES PRO ═══
var fiches = [
  {ico:'⚡',title:'Loi d\'Ohm & Kirchhoff',tags:['Électricité','Bases'],desc:'Formules fondamentales : U=RI, lois des nœuds et des mailles.',
  content:'<h3>⚡ Loi d\'Ohm & Kirchhoff</h3><h4>Loi d\'Ohm</h4><div class="formula">U = R × I &nbsp;|&nbsp; R = U/I &nbsp;|&nbsp; I = U/R</div><p>U en Volts, R en Ohms, I en Ampères</p><h4>Loi des nœuds</h4><div class="formula">Σ I entrants = Σ I sortants</div><h4>Loi des mailles</h4><div class="formula">Σ U = 0 (dans une maille)</div><h4>Puissances</h4><ul><li>P = U × I (Watts)</li><li>P = R × I² = U²/R</li><li>S = U × I (VA)</li><li>Q = U × I × sin φ (VAr)</li></ul>'},

  {ico:'🛡️',title:'Habilitation électrique',tags:['Sécurité','BT/HT'],desc:'Niveaux d\'habilitation, symboles et domaines de tension.',
  content:'<h3>🛡️ Habilitation Électrique</h3><h4>Domaines de tension</h4><ul><li>TBT : ≤ 50V AC / ≤ 120V DC</li><li>BT : 50V à 1000V AC</li><li>HTA : 1kV à 50kV AC</li><li>HTB : > 50kV AC</li></ul><h4>Symboles BT</h4><ul><li><strong>B0</strong> : Exécutant non électricien</li><li><strong>B1</strong> : Exécutant hors tension</li><li><strong>B2</strong> : Chargé de travaux</li><li><strong>BR</strong> : Chargé d\'interventions générales</li><li><strong>BC</strong> : Chargé de consignation</li><li><strong>BS</strong> : Interventions élémentaires</li></ul><h4>4 étapes de consignation</h4><ul><li>1. Séparation</li><li>2. Condamnation</li><li>3. VAT (Vérification Absence Tension)</li><li>4. MALT + MCC</li></ul>'},

  {ico:'🌴',title:'Spécificités climat tropical',tags:['Polynésie','Maintenance'],desc:'Impact de l\'humidité et du climat sur les installations électriques.',
  content:'<h3>🌴 Spécificités du climat tropical polynésien</h3><h4>Effets sur les installations</h4><ul><li>Humidité ambiante : favorise l\'oxydation des contacts et bornes</li><li>Air marin : accélère fortement la corrosion des boîtiers métalliques</li><li>UV intenses : dégradent les gaines et isolants plastiques non traités</li><li>Vents cycloniques (nov-avril) : sollicitent fortement les fixations extérieures</li></ul><h4>Bonnes pratiques recommandées</h4><ul><li>Privilégier le matériel certifié IP65 minimum en extérieur</li><li>Contrôler régulièrement les points de connexion (oxydation)</li><li>Nettoyer les équipements exposés au sel marin (dont panneaux solaires)</li><li>Anticiper les délais d\'approvisionnement pour les îles éloignées</li></ul>'},

  {ico:'📐',title:'Sections câbles NF C 15-100',tags:['Installation','Normes'],desc:'Sections normalisées et courants admissibles.',
  content:'<h3>📐 Sections de câbles NF C 15-100</h3><h4>Utilisations courantes</h4><ul><li><strong>1,5 mm²</strong> → Éclairage (16A max)</li><li><strong>2,5 mm²</strong> → Prises 16A</li><li><strong>4 mm²</strong> → Chauffe-eau 20A</li><li><strong>6 mm²</strong> → Cuisinière 32A</li><li><strong>10 mm²</strong> → Sous-distribution 40A</li><li><strong>16 mm²</strong> → Départ tableau 63A</li></ul><h4>Chute de tension max</h4><ul><li>Éclairage : ΔU ≤ 3%</li><li>Force / prises : ΔU ≤ 5%</li></ul><div class="formula">S = (ρ × 2L × I) / ΔU_max</div><p>ρ cuivre = 0,01786 Ω.mm²/m</p>'},

  {ico:'⚙️',title:'Grafcet — Bases',tags:['Automatisme','API'],desc:'Règles d\'évolution, étapes, transitions et actions.',
  content:'<h3>⚙️ GRAFCET — Bases</h3><h4>Structure</h4><ul><li><strong>Étape</strong> : état stable (carré numéroté)</li><li><strong>Transition</strong> : condition de passage</li><li><strong>Action</strong> : ce que fait le système</li></ul><h4>5 Règles d\'évolution</h4><ul><li>R1 : Étapes initiales actives au démarrage</li><li>R2 : Franchissement si étape active ET réceptivité vraie</li><li>R3 : Désactivation amont + activation aval</li><li>R4 : Évolutions simultanées possibles</li><li>R5 : Activation+désactivation simultanée → reste active</li></ul>'},

  {ico:'☀️',title:'Solaire photovoltaïque PF',tags:['Énergie','Solaire'],desc:'Dimensionnement d\'une installation PV en contexte polynésien.',
  content:'<h3>☀️ Solaire Photovoltaïque en Polynésie</h3><div class="formula">E (kWh) = P_crête (kWc) × H_ensoleillement × PR</div><p>H ensoleillement PF ≈ 5 à 6h/jour | PR ≈ 0,75 à 0,85</p><h4>Composants</h4><ul><li>Panneaux PV résistants UV/sel marin</li><li>Onduleur : DC → AC, gestion MPPT</li><li>Batteries (sites isolés / motu)</li><li>Fixations anti-cyclone</li></ul><h4>Associations</h4><ul><li>Série : U_total = n × U_panneau</li><li>Parallèle : I_total = n × I_panneau</li></ul>'},

  {ico:'🔄',title:'Moteur asynchrone',tags:['Industriel','Moteurs'],desc:'Principe, formules et démarrage.',
  content:'<h3>🔄 Moteur Asynchrone Triphasé</h3><div class="formula">ns = 60f / p &nbsp;|&nbsp; g = (ns-n)/ns</div><h4>Couplages</h4><ul><li><strong>Étoile (Y)</strong> : U_bobinage = U_réseau/√3</li><li><strong>Triangle (Δ)</strong> : U_bobinage = U_réseau</li></ul><h4>Démarrages</h4><ul><li>Direct : courant 5 à 8 × In</li><li>Étoile-Triangle : Id = In/3</li><li>Variateur (VFD) : démarrage doux, recommandé pour pompes</li></ul>'},

  {ico:'🏠',title:'KNX — Aide-mémoire',tags:['Domotique','KNX'],desc:'Adressage, topologie et types de données.',
  content:'<h3>🏠 KNX — Aide-mémoire</h3><h4>Caractéristiques bus</h4><ul><li>Support : TP (câble 2 fils)</li><li>Alimentation : 29V DC</li><li>Vitesse : 9600 bps</li></ul><h4>Adresse physique</h4><div class="formula">Zone . Ligne . Appareil (ex: 1.1.5)</div><h4>Adresse de groupe</h4><div class="formula">1/1/1 (groupe / moyen / sous-groupe)</div><h4>Types de données</h4><ul><li>DPT 1.001 : On/Off (1 bit)</li><li>DPT 5.001 : Gradation 0-100%</li><li>DPT 9.001 : Température</li></ul>'},

  {ico:'📏',title:'Puissance & Énergie',tags:['Électricité','Formules'],desc:'Formules puissance active, réactive, apparente.',
  content:'<h3>📏 Puissance & Énergie</h3><h4>Monophasé</h4><div class="formula">P = U×I×cos φ (W)<br>Q = U×I×sin φ (VAr)<br>S = U×I (VA)</div><h4>Triphasé</h4><div class="formula">P = √3×U×I×cos φ<br>S = √3×U×I</div><h4>Triangle des puissances</h4><ul><li>S² = P² + Q²</li><li>cos φ = P/S</li><li>tan φ = Q/P</li></ul>'},
];
