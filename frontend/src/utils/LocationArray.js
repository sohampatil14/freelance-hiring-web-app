const locations = [
  {
    label: "Delhi",
    value: "delhi",
  },
  {
    label: "Mumbai",
    value: "mumbai",
  },
  {
    label: "Kolkata",
    value: "kolkata",
  },
  {
    label: "Bangalore",
    value: "bangalore",
  },
  {
    label: "Chennai",
    value: "chennai",
  },
  {
    label: "Hyderabad",
    value: "hyderabad",
  },
  {
    label: "Pune",
    value: "pune",
  },
  {
    label: "Ahmedabad",
    value: "ahmedabad",
  },
  {
    label: "Sūrat",
    value: "sūrat",
  },
  {
    label: "Lucknow",
    value: "lucknow",
  },
  {
    label: "Jaipur",
    value: "jaipur",
  },
  {
    label: "Cawnpore",
    value: "cawnpore",
  },
  {
    label: "Mirzapur",
    value: "mirzapur",
  },
  {
    label: "Nagpur",
    value: "nagpur",
  },
  {
    label: "Ghaziabad",
    value: "ghaziabad",
  },
  {
    label: "Indore",
    value: "indore",
  },
  {
    label: "Vadodara",
    value: "vadodara",
  },
  {
    label: "Vishakhapatnam",
    value: "vishakhapatnam",
  },
  {
    label: "Bhopal",
    value: "bhopal",
  },
  {
    label: "Chinchvad",
    value: "chinchvad",
  },
  {
    label: "Patna",
    value: "patna",
  },
  {
    label: "Ludhiana",
    value: "ludhiana",
  },
  {
    label: "agra",
    value: "agra",
  },
  {
    label: "Kalyan",
    value: "kalyan",
  },
  {
    label: "Madurai",
    value: "madurai",
  },
  {
    label: "Jamshedpur",
    value: "jamshedpur",
  },
  {
    label: "Nasik",
    value: "nasik",
  },
  {
    label: "Farīdabad",
    value: "farīdabad",
  },
  {
    label: "Aurangabad",
    value: "aurangabad",
  },
  {
    label: "Rajkot",
    value: "rajkot",
  },
  {
    label: "Meerut",
    value: "meerut",
  },
  {
    label: "Jabalpur",
    value: "jabalpur",
  },
  {
    label: "Thane",
    value: "thane",
  },
  {
    label: "Dhanbad",
    value: "dhanbad",
  },
  {
    label: "Allahabad",
    value: "allahabad",
  },
  {
    label: "Varanasi",
    value: "varanasi",
  },
  {
    label: "Srīnagar",
    value: "srīnagar",
  },
  {
    label: "Amritsar",
    value: "amritsar",
  },
  {
    label: "Alīgarh",
    value: "alīgarh",
  },
  {
    label: "Bhiwandi",
    value: "bhiwandi",
  },
  {
    label: "Gwalior",
    value: "gwalior",
  },
  {
    label: "Bhilai",
    value: "bhilai",
  },
  {
    label: "Haora",
    value: "haora",
  },
  {
    label: "Ranchi",
    value: "ranchi",
  },
  {
    label: "Bezwada",
    value: "bezwada",
  },
  {
    label: "Chandīgarh",
    value: "chandīgarh",
  },
  {
    label: "Mysore",
    value: "mysore",
  },
  {
    label: "Raipur",
    value: "raipur",
  },
  {
    label: "Kota",
    value: "kota",
  },
  {
    label: "Bareilly",
    value: "bareilly",
  },
  {
    label: "Jodhpur",
    value: "jodhpur",
  },
  {
    label: "Coimbatore",
    value: "coimbatore",
  },
  {
    label: "Dispur",
    value: "dispur",
  },
  {
    label: "Guwahati",
    value: "guwahati",
  },
  {
    label: "Solapur",
    value: "solapur",
  },
  {
    label: "Trichinopoly",
    value: "trichinopoly",
  },
  {
    label: "Hubli",
    value: "hubli",
  },
  {
    label: "Jalandhar",
    value: "jalandhar",
  },
  {
    label: "Bhubaneshwar",
    value: "bhubaneshwar",
  },
  {
    label: "Bhayandar",
    value: "bhayandar",
  },
  {
    label: "Moradabad",
    value: "moradabad",
  },
  {
    label: "Kolhapur",
    value: "kolhapur",
  },
  {
    label: "Thiruvananthapuram",
    value: "thiruvananthapuram",
  },
  {
    label: "Saharanpur",
    value: "saharanpur",
  },
  {
    label: "Warangal",
    value: "warangal",
  },
  {
    label: "Salem",
    value: "salem",
  },
  {
    label: "Malegaon",
    value: "malegaon",
  },
  {
    label: "Kochi",
    value: "kochi",
  },
  {
    label: "Gorakhpur",
    value: "gorakhpur",
  },
  {
    label: "Shimoga",
    value: "shimoga",
  },
  {
    label: "Tiruppūr",
    value: "tiruppūr",
  },
  {
    label: "Guntūr",
    value: "guntūr",
  },
  {
    label: "Raurkela",
    value: "raurkela",
  },
  {
    label: "Mangalore",
    value: "mangalore",
  },
  {
    label: "Nanded",
    value: "nanded",
  },
  {
    label: "Cuttack",
    value: "cuttack",
  },
  {
    label: "Chanda",
    value: "chanda",
  },
  {
    label: "Dehra Dūn",
    value: "dehra dūn",
  },
  {
    label: "Durgapur",
    value: "durgapur",
  },
  {
    label: "asansol",
    value: "asansol",
  },
  {
    label: "Bhavnagar",
    value: "bhavnagar",
  },
  {
    label: "Amravati",
    value: "amravati",
  },
  {
    label: "Nellore",
    value: "nellore",
  },
  {
    label: "Ajmer",
    value: "ajmer",
  },
  {
    label: "Tinnevelly",
    value: "tinnevelly",
  },
  {
    label: "Bīkaner",
    value: "bīkaner",
  },
  {
    label: "Agartala",
    value: "agartala",
  },
  {
    label: "Ujjain",
    value: "ujjain",
  },
  {
    label: "Jhansi",
    value: "jhansi",
  },
  {
    label: "Ulhasnagar",
    value: "ulhasnagar",
  },
  {
    label: "Davangere",
    value: "davangere",
  },
  {
    label: "Jammu",
    value: "jammu",
  },
  {
    label: "Belgaum",
    value: "belgaum",
  },
  {
    label: "Gulbarga",
    value: "gulbarga",
  },
  {
    label: "Jamnagar",
    value: "jamnagar",
  },
  {
    label: "Dhūlia",
    value: "dhūlia",
  },
  {
    label: "Gaya",
    value: "gaya",
  },
  {
    label: "Jalgaon",
    value: "jalgaon",
  },
  {
    label: "Kurnool",
    value: "kurnool",
  },
  {
    label: "Udaipur",
    value: "udaipur",
  },
  {
    label: "Bellary",
    value: "bellary",
  },
  {
    label: "Sangli",
    value: "sangli",
  },
  {
    label: "Tuticorin",
    value: "tuticorin",
  },
  {
    label: "Calicut",
    value: "calicut",
  },
  {
    label: "Akola",
    value: "akola",
  },
  {
    label: "Bhagalpur",
    value: "bhagalpur",
  },
  {
    label: "Sīkar",
    value: "sīkar",
  },
  {
    label: "Tumkūr",
    value: "tumkūr",
  },
  {
    label: "Quilon",
    value: "quilon",
  },
  {
    label: "Muzaffarnagar",
    value: "muzaffarnagar",
  },
  {
    label: "Bhīlwara",
    value: "bhīlwara",
  },
  {
    label: "Nizamabad",
    value: "nizamabad",
  },
  {
    label: "Bhatpara",
    value: "bhatpara",
  },
  {
    label: "Kakinada",
    value: "kakinada",
  },
  {
    label: "Parbhani",
    value: "parbhani",
  },
  {
    label: "Panihati",
    value: "panihati",
  },
  {
    label: "Latūr",
    value: "latūr",
  },
  {
    label: "Rohtak",
    value: "rohtak",
  },
  {
    label: "Rajapalaiyam",
    value: "rajapalaiyam",
  },
  {
    label: "Ahmadnagar",
    value: "ahmadnagar",
  },
  {
    label: "Cuddapah",
    value: "cuddapah",
  },
  {
    label: "Rajahmundry",
    value: "rajahmundry",
  },
  {
    label: "Alwar",
    value: "alwar",
  },
  {
    label: "Muzaffarpur",
    value: "muzaffarpur",
  },
  {
    label: "Bilaspur",
    value: "bilaspur",
  },
  {
    label: "Mathura",
    value: "mathura",
  },
  {
    label: "Kamarhati",
    value: "kamarhati",
  },
  {
    label: "Patiala",
    value: "patiala",
  },
  {
    label: "Saugor",
    value: "saugor",
  },
  {
    label: "Bijapur",
    value: "bijapur",
  },
  {
    label: "Brahmapur",
    value: "brahmapur",
  },
  {
    label: "Shahjanpur",
    value: "shahjanpur",
  },
  {
    label: "Trichūr",
    value: "trichūr",
  },
  {
    label: "Barddhaman",
    value: "barddhaman",
  },
  {
    label: "Kulti",
    value: "kulti",
  },
  {
    label: "Sambalpur",
    value: "sambalpur",
  },
  {
    label: "Purnea",
    value: "purnea",
  },
  {
    label: "Hisar",
    value: "hisar",
  },
  {
    label: "Fīrozabad",
    value: "fīrozabad",
  },
  {
    label: "Bīdar",
    value: "bīdar",
  },
  {
    label: "Rampur",
    value: "rampur",
  },
  {
    label: "Shiliguri",
    value: "shiliguri",
  },
  {
    label: "Bali",
    value: "bali",
  },
  {
    label: "Panīpat",
    value: "panīpat",
  },
  {
    label: "Karīmnagar",
    value: "karīmnagar",
  },
  {
    label: "Bhuj",
    value: "bhuj",
  },
  {
    label: "Ichalkaranji",
    value: "ichalkaranji",
  },
  {
    label: "Tirupati",
    value: "tirupati",
  },
  {
    label: "Hospet",
    value: "hospet",
  },
  {
    label: "aīzawl",
    value: "aīzawl",
  },
  {
    label: "Sannai",
    value: "sannai",
  },
  {
    label: "Barasat",
    value: "barasat",
  },
  {
    label: "Ratlam",
    value: "ratlam",
  },
  {
    label: "Handwara",
    value: "handwara",
  },
  {
    label: "Drug",
    value: "drug",
  },
  {
    label: "Imphal",
    value: "imphal",
  },
  {
    label: "Anantapur",
    value: "anantapur",
  },
  {
    label: "Etawah",
    value: "etawah",
  },
  {
    label: "Raichūr",
    value: "raichūr",
  },
  {
    label: "Ongole",
    value: "ongole",
  },
  {
    label: "Bharatpur",
    value: "bharatpur",
  },
  {
    label: "Begusarai",
    value: "begusarai",
  },
  {
    label: "Sonīpat",
    value: "sonīpat",
  },
  {
    label: "Ramgundam",
    value: "ramgundam",
  },
  {
    label: "Hapur",
    value: "hapur",
  },
  {
    label: "Uluberiya",
    value: "uluberiya",
  },
  {
    label: "Porbandar",
    value: "porbandar",
  },
  {
    label: "Pali",
    value: "pali",
  },
  {
    label: "Vizianagaram",
    value: "vizianagaram",
  },
  {
    label: "Puducherry",
    value: "puducherry",
  },
  {
    label: "Karnal",
    value: "karnal",
  },
  {
    label: "Nagercoil",
    value: "nagercoil",
  },
  {
    label: "Tanjore",
    value: "tanjore",
  },
  {
    label: "Sambhal",
    value: "sambhal",
  },
  {
    label: "Naihati",
    value: "naihati",
  },
  {
    label: "Secunderabad",
    value: "secunderabad",
  },
  {
    label: "Kharagpur",
    value: "kharagpur",
  },
  {
    label: "Dindigul",
    value: "dindigul",
  },
  {
    label: "Shimla",
    value: "shimla",
  },
  {
    label: "Ingraj Bazar",
    value: "ingraj bazar",
  },
  {
    label: "Ellore",
    value: "ellore",
  },
  {
    label: "Puri",
    value: "puri",
  },
  {
    label: "Haldia",
    value: "haldia",
  },
  {
    label: "Nandyal",
    value: "nandyal",
  },
  {
    label: "Bulandshahr",
    value: "bulandshahr",
  },
  {
    label: "Chakradharpur",
    value: "chakradharpur",
  },
  {
    label: "Bhiwani",
    value: "bhiwani",
  },
  {
    label: "Gurgaon",
    value: "gurgaon",
  },
  {
    label: "Burhanpur",
    value: "burhanpur",
  },
  {
    label: "Khammam",
    value: "khammam",
  },
  {
    label: "Madhyamgram",
    value: "madhyamgram",
  },
  {
    label: "Ghandīnagar",
    value: "ghandīnagar",
  },
  {
    label: "Baharampur",
    value: "baharampur",
  },
  {
    label: "Mahbūbnagar",
    value: "mahbūbnagar",
  },
  {
    label: "Mahesana",
    value: "mahesana",
  },
  {
    label: "adoni",
    value: "adoni",
  },
  {
    label: "Raiganj",
    value: "raiganj",
  },
  {
    label: "Bhusaval",
    value: "bhusaval",
  },
  {
    label: "Bahraigh",
    value: "bahraigh",
  },
  {
    label: "Shrīrampur",
    value: "shrīrampur",
  },
  {
    label: "Tonk",
    value: "tonk",
  },
  {
    label: "Sirsa",
    value: "sirsa",
  },
  {
    label: "Jaunpur",
    value: "jaunpur",
  },
  {
    label: "Madanapalle",
    value: "madanapalle",
  },
  {
    label: "Hugli",
    value: "hugli",
  },
  {
    label: "Vellore",
    value: "vellore",
  },
  {
    label: "Alleppey",
    value: "alleppey",
  },
  {
    label: "Cuddalore",
    value: "cuddalore",
  },
  {
    label: "Deo",
    value: "deo",
  },
  {
    label: "Chīrala",
    value: "chīrala",
  },
  {
    label: "Machilīpatnam",
    value: "machilīpatnam",
  },
  {
    label: "Medinīpur",
    value: "medinīpur",
  },
  {
    label: "Baramūla",
    value: "baramūla",
  },
  {
    label: "Chandannagar",
    value: "chandannagar",
  },
  {
    label: "Fatehpur",
    value: "fatehpur",
  },
  {
    label: "Udipi",
    value: "udipi",
  },
  {
    label: "Tenali",
    value: "tenali",
  },
  {
    label: "Sitalpur",
    value: "sitalpur",
  },
  {
    label: "Conjeeveram",
    value: "conjeeveram",
  },
  {
    label: "Proddatūr",
    value: "proddatūr",
  },
  {
    label: "Navsari",
    value: "navsari",
  },
  {
    label: "Godhra",
    value: "godhra",
  },
  {
    label: "Budaun",
    value: "budaun",
  },
  {
    label: "Chittoor",
    value: "chittoor",
  },
  {
    label: "Harīpur",
    value: "harīpur",
  },
  {
    label: "Saharsa",
    value: "saharsa",
  },
  {
    label: "Vidisha",
    value: "vidisha",
  },
  {
    label: "Pathankot",
    value: "pathankot",
  },
  {
    label: "Nalgonda",
    value: "nalgonda",
  },
  {
    label: "Dibrugarh",
    value: "dibrugarh",
  },
  {
    label: "Balurghat",
    value: "balurghat",
  },
  {
    label: "Krishnanagar",
    value: "krishnanagar",
  },
  {
    label: "Fyzabad",
    value: "fyzabad",
  },
  {
    label: "Silchar",
    value: "silchar",
  },
  {
    label: "Shantipur",
    value: "shantipur",
  },
  {
    label: "Hindupur",
    value: "hindupur",
  },
  {
    label: "Erode",
    value: "erode",
  },
  {
    label: "Jamuria",
    value: "jamuria",
  },
  {
    label: "Habra",
    value: "habra",
  },
  {
    label: "Ambala",
    value: "ambala",
  },
  {
    label: "Mauli",
    value: "mauli",
  },
  {
    label: "Kolar",
    value: "kolar",
  },
  {
    label: "Shillong",
    value: "shillong",
  },
  {
    label: "Bhīmavaram",
    value: "bhīmavaram",
  },
  {
    label: "New Delhi",
    value: "new delhi",
  },
  {
    label: "Mandsaur",
    value: "mandsaur",
  },
  {
    label: "Kumbakonam",
    value: "kumbakonam",
  },
  {
    label: "Tiruvannamalai",
    value: "tiruvannamalai",
  },
  {
    label: "Chicacole",
    value: "chicacole",
  },
  {
    label: "Bankura",
    value: "bankura",
  },
  {
    label: "Mandya",
    value: "mandya",
  },
  {
    label: "Hassan",
    value: "hassan",
  },
  {
    label: "Yavatmal",
    value: "yavatmal",
  },
  {
    label: "Pīlibhīt",
    value: "pīlibhīt",
  },
  {
    label: "Palghat",
    value: "palghat",
  },
  {
    label: "Abohar",
    value: "abohar",
  },
  {
    label: "Palakollu",
    value: "palakollu",
  },
  {
    label: "Kanchrapara",
    value: "kanchrapara",
  },
  {
    label: "Port Blair",
    value: "port blair",
  },
  {
    label: "Alīpur Duar",
    value: "alīpur duar",
  },
  {
    label: "Hathras",
    value: "hathras",
  },
  {
    label: "Guntakal",
    value: "guntakal",
  },
  {
    label: "Navadwīp",
    value: "navadwīp",
  },
  {
    label: "Basīrhat",
    value: "basīrhat",
  },
  {
    label: "Halīsahar",
    value: "halīsahar",
  },
  {
    label: "Rishra",
    value: "rishra",
  },
  {
    label: "Dharmavaram",
    value: "dharmavaram",
  },
  {
    label: "Baidyabati",
    value: "baidyabati",
  },
  {
    label: "Darjeeling",
    value: "darjeeling",
  },
  {
    label: "Sopur",
    value: "sopur",
  },
  {
    label: "Gudivada",
    value: "gudivada",
  },
  {
    label: "Adilabad",
    value: "adilabad",
  },
  {
    label: "Titagarh",
    value: "titagarh",
  },
  {
    label: "Chittaurgarh",
    value: "chittaurgarh",
  },
  {
    label: "Narasaraopet",
    value: "narasaraopet",
  },
  {
    label: "Dam Dam",
    value: "dam dam",
  },
  {
    label: "Valparai",
    value: "valparai",
  },
  {
    label: "Osmanabad",
    value: "osmanabad",
  },
  {
    label: "Champdani",
    value: "champdani",
  },
  {
    label: "Bangaon",
    value: "bangaon",
  },
  {
    label: "Khardah",
    value: "khardah",
  },
  {
    label: "Tadpatri",
    value: "tadpatri",
  },
  {
    label: "Jalpaiguri",
    value: "jalpaiguri",
  },
  {
    label: "Suriapet",
    value: "suriapet",
  },
  {
    label: "Tadepallegūdem",
    value: "tadepallegūdem",
  },
  {
    label: "Bansbaria",
    value: "bansbaria",
  },
  {
    label: "Negapatam",
    value: "negapatam",
  },
  {
    label: "Bhadreswar",
    value: "bhadreswar",
  },
  {
    label: "Chilakalūrupet",
    value: "chilakalūrupet",
  },
  {
    label: "Kalyani",
    value: "kalyani",
  },
  {
    label: "Gangtok",
    value: "gangtok",
  },
  {
    label: "Kohīma",
    value: "kohīma",
  },
  {
    label: "Khambhat",
    value: "khambhat",
  },
  {
    label: "Aurangabad",
    value: "aurangabad",
  },
  {
    label: "Emmiganūr",
    value: "emmiganūr",
  },
  {
    label: "Rayachoti",
    value: "rayachoti",
  },
  {
    label: "Kavali",
    value: "kavali",
  },
  {
    label: "Mancheral",
    value: "mancheral",
  },
  {
    label: "Kadiri",
    value: "kadiri",
  },
  {
    label: "Ootacamund",
    value: "ootacamund",
  },
  {
    label: "Anakapalle",
    value: "anakapalle",
  },
  {
    label: "Sirsilla",
    value: "sirsilla",
  },
  {
    label: "Kamareddipet",
    value: "kamareddipet",
  },
  {
    label: "Paloncha",
    value: "paloncha",
  },
  {
    label: "Kottagūdem",
    value: "kottagūdem",
  },
  {
    label: "Tanuku",
    value: "tanuku",
  },
  {
    label: "Bodhan",
    value: "bodhan",
  },
  {
    label: "Karūr",
    value: "karūr",
  },
  {
    label: "Mangalagiri",
    value: "mangalagiri",
  },
  {
    label: "Kairana",
    value: "kairana",
  },
  {
    label: "Markapur",
    value: "markapur",
  },
  {
    label: "Malaut",
    value: "malaut",
  },
  {
    label: "Bapatla",
    value: "bapatla",
  },
  {
    label: "Badvel",
    value: "badvel",
  },
  {
    label: "Jorhat",
    value: "jorhat",
  },
  {
    label: "Koratla",
    value: "koratla",
  },
  {
    label: "Pulivendla",
    value: "pulivendla",
  },
  {
    label: "Jaisalmer",
    value: "jaisalmer",
  },
  {
    label: "Tadepalle",
    value: "tadepalle",
  },
  {
    label: "Armūr",
    value: "armūr",
  },
  {
    label: "Jatani",
    value: "jatani",
  },
  {
    label: "Gadwal",
    value: "gadwal",
  },
  {
    label: "Nagari",
    value: "nagari",
  },
  {
    label: "Wanparti",
    value: "wanparti",
  },
  {
    label: "Ponnūru",
    value: "ponnūru",
  },
  {
    label: "Vinukonda",
    value: "vinukonda",
  },
  {
    label: "Itanagar",
    value: "itanagar",
  },
  {
    label: "Tezpur",
    value: "tezpur",
  },
  {
    label: "Narasapur",
    value: "narasapur",
  },
  {
    label: "Kothapet",
    value: "kothapet",
  },
  {
    label: "Macherla",
    value: "macherla",
  },
  {
    label: "Kandukūr",
    value: "kandukūr",
  },
  {
    label: "Samalkot",
    value: "samalkot",
  },
  {
    label: "Bobbili",
    value: "bobbili",
  },
  {
    label: "Sattenapalle",
    value: "sattenapalle",
  },
  {
    label: "Vrindavan",
    value: "vrindavan",
  },
  {
    label: "Mandapeta",
    value: "mandapeta",
  },
  {
    label: "Belampalli",
    value: "belampalli",
  },
  {
    label: "Bhīmunipatnam",
    value: "bhīmunipatnam",
  },
  {
    label: "Nandod",
    value: "nandod",
  },
  {
    label: "Pithapuram",
    value: "pithapuram",
  },
  {
    label: "Punganūru",
    value: "punganūru",
  },
  {
    label: "Puttūr",
    value: "puttūr",
  },
  {
    label: "Jalor",
    value: "jalor",
  },
  {
    label: "Palmaner",
    value: "palmaner",
  },
  {
    label: "Dholka",
    value: "dholka",
  },
  {
    label: "Jaggayyapeta",
    value: "jaggayyapeta",
  },
  {
    label: "Tuni",
    value: "tuni",
  },
  {
    label: "Amalapuram",
    value: "amalapuram",
  },
  {
    label: "Jagtial",
    value: "jagtial",
  },
  {
    label: "Vikarabad",
    value: "vikarabad",
  },
  {
    label: "Venkatagiri",
    value: "venkatagiri",
  },
  {
    label: "Sihor",
    value: "sihor",
  },
  {
    label: "Jangaon",
    value: "jangaon",
  },
  {
    label: "Mandamari",
    value: "mandamari",
  },
  {
    label: "Metpalli",
    value: "metpalli",
  },
  {
    label: "Repalle",
    value: "repalle",
  },
  {
    label: "Bhainsa",
    value: "bhainsa",
  },
  {
    label: "Jasdan",
    value: "jasdan",
  },
  {
    label: "Jammalamadugu",
    value: "jammalamadugu",
  },
  {
    label: "Rameswaram",
    value: "rameswaram",
  },
  {
    label: "Addanki",
    value: "addanki",
  },
  {
    label: "Nidadavole",
    value: "nidadavole",
  },
  {
    label: "Bodupal",
    value: "bodupal",
  },
  {
    label: "Rajgīr",
    value: "rajgīr",
  },
  {
    label: "Rajaori",
    value: "rajaori",
  },
  {
    label: "Naini Tal",
    value: "naini tal",
  },
  {
    label: "Channarayapatna",
    value: "channarayapatna",
  },
  {
    label: "Maihar",
    value: "maihar",
  },
  {
    label: "Panaji",
    value: "panaji",
  },
  {
    label: "Junnar",
    value: "junnar",
  },
  {
    label: "Amudalavalasa",
    value: "amudalavalasa",
  },
  {
    label: "Daman",
    value: "daman",
  },
  {
    label: "Kovvūr",
    value: "kovvūr",
  },
  {
    label: "Solan",
    value: "solan",
  },
  {
    label: "Dwarka",
    value: "dwarka",
  },
  {
    label: "Pathanamthitta",
    value: "pathanamthitta",
  },
  {
    label: "Kodaikanal",
    value: "kodaikanal",
  },
  {
    label: "Udhampur",
    value: "udhampur",
  },
  {
    label: "Giddalūr",
    value: "giddalūr",
  },
  {
    label: "Yellandu",
    value: "yellandu",
  },
  {
    label: "Shrīrangapattana",
    value: "shrīrangapattana",
  },
  {
    label: "Angamali",
    value: "angamali",
  },
  {
    label: "Umaria",
    value: "umaria",
  },
  {
    label: "Fatehpur Sīkri",
    value: "fatehpur sīkri",
  },
  {
    label: "Mangūr",
    value: "mangūr",
  },
  {
    label: "Pedana",
    value: "pedana",
  },
  {
    label: "Uran",
    value: "uran",
  },
  {
    label: "Chimakurti",
    value: "chimakurti",
  },
  {
    label: "Devarkonda",
    value: "devarkonda",
  },
  {
    label: "Bandipura",
    value: "bandipura",
  },
  {
    label: "Silvassa",
    value: "silvassa",
  },
  {
    label: "Pamidi",
    value: "pamidi",
  },
  {
    label: "Narasannapeta",
    value: "narasannapeta",
  },
  {
    label: "Jaynagar-Majilpur",
    value: "jaynagar-majilpur",
  },
  {
    label: "Khed Brahma",
    value: "khed brahma",
  },
  {
    label: "Khajuraho",
    value: "khajuraho",
  },
  {
    label: "Koilkuntla",
    value: "koilkuntla",
  },
  {
    label: "Diu",
    value: "diu",
  },
  {
    label: "Kulgam",
    value: "kulgam",
  },
  {
    label: "Gauripur",
    value: "gauripur",
  },
  {
    label: "Abu",
    value: "abu",
  },
  {
    label: "Curchorem",
    value: "curchorem",
  },
  {
    label: "Kavaratti",
    value: "kavaratti",
  },
  {
    label: "Panchkula",
    value: "panchkula",
  },
  {
    label: "Kagaznaga",
    value: "kagaznaga",
  },
];

export default locations;
