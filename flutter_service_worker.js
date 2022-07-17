'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "373551f95af409691693fa75cd228a59",
".git/config": "e4526c11721291314c0b52be9f6a706a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "122669c21bfc75cf698bfea4ccffffdd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0a5ea754e12d345116f06e4592c5efa",
".git/logs/refs/heads/main": "c0a5ea754e12d345116f06e4592c5efa",
".git/logs/refs/remotes/origin/main": "2a9c9062c13f8ffd224aaeacfcf95d5f",
".git/objects/01/109720a94814129ec68cc91476a71ebffbe515": "131a081204c44f3e60f2f74e2a470563",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/05/efab4ccbff7bbc644ed7169ce9d694f7c48077": "9363865f54cd26a47afed5d700b07221",
".git/objects/06/ceb8c72d9e3e36bcdd805d2d86f624e97e6c14": "faf1eac7adf760687619813e3def7170",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/8c316e9e8ece760fec88b1940ed56650935ab2": "7049bfeaace4a1382fd35b38886bd96d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/15/09c0a89a5b52615f2e167a4eb9116fa3b0d4d4": "28a7b382b0a1073c149c1fae4081c04e",
".git/objects/20/357d45ecd8d9fc6661ed96f2f0eccc3398d94e": "4bfeed76a3c72dc38d2f4e2d558a07f4",
".git/objects/22/4c75b5b4aff443f838633cbeddc3376d5731e6": "893b5e975e2eb488cf59c2a8a14d59f4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/a1ca61cbf70d940407b7bbf1510d3dc9013e56": "f7c758c5ed984c4e4c6f889064259796",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/dc272c8f95d918c177551ac9c2c339fd768cc0": "afe92f507820a8927ea767e7bf6de359",
".git/objects/34/c80955dc0dc3f26089d2a4a45d59c934394e05": "8526d2ba220fbe9f7db4c14739e60712",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/46/7e647fc288cec1424e948b7246881f3b59d9f5": "450acf448ad55c069773d5575cbd118a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/c31bdc01336320fc91dfb8d99f4ee7d8311764": "b2215b4100818c2a812696b2cfe01085",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/145585f746fe8f8a038a35b039addd17ac7b40": "5841931ceabd55a2b6be6c86b031bca8",
".git/objects/58/d9dfc73dcfd88e843c1edbaeba37efde1e3fc3": "07fcaffa85aec07aa464f451176268e7",
".git/objects/58/f7badb59bd2456127373fff6fc2ffb88144630": "38c080a38b1004b85916c6ef39757c52",
".git/objects/5f/09408de7af5abbf47448d41047960309ee734f": "f663a020a823442894ad015222321445",
".git/objects/5f/64df7e3f0e92be907896ed8d5449fb9af2adef": "7af311865cc8057196aba5cdd4c7c790",
".git/objects/61/41ff5e712e5b205bad369074d80edef4605242": "2528f9d5e0fdfea7238979e44ac8a88f",
".git/objects/61/55b8efaae97f04a912fc8b53daabeb4b3781e7": "3551261dd0efec621a1d0a2af8514439",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/68/2bb9655d6d0e5596e488c28619b93631b7e690": "f52582b59ad1f36553caf75018295a8f",
".git/objects/73/860179715f1968e5c433615ce6ab9574f53f17": "d3442ac1ea060b10ebaf10564dcac788",
".git/objects/73/e5614a5a23221fbf492e4b9966bfc9d4b5e90d": "fe7eb92ae2019696e05a303a619cf9c1",
".git/objects/75/4c1b2a7b2e3387ae00341b79d4edc005d10e2f": "f2dcdd1607f777411c0c684f04a22235",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/00c6b755aac69d6d9302c54024b0cb1536b969": "04121cc24d70f8cca570ba6d0839776a",
".git/objects/78/8a1ed6b1d5f89256a22240439a37477a76553b": "90df8f9150e1ccc1a0aadad842cdb3bc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/c67dd0a7c3454f10f1eefde8f06e4956dcb1b0": "4a7f600047f351963249d7b64995ba70",
".git/objects/7f/e53804d13f2245aea05fea16082fbc0700ee07": "a6e05eb103e8fa183b535fb9392715ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/21b8d872c67ef664ae879b4c7aaf38e3b17599": "5c98ad5254789ac627ad3ab1e0393819",
".git/objects/8f/c281b1ec7a98da31b8376a8705cb2c68885c34": "74941dc02e07faeafed54c1864152860",
".git/objects/90/78fed87398921809dccd12d00b379ea9477423": "437c818b57d9973e4cb2743531515c6c",
".git/objects/99/a3abbe493e786ca07deb8d05877f517468f10c": "c12452f650d68c8d5c7a98155cd29078",
".git/objects/9b/f9ca982307f84aefff529c22ac5240719fd5f9": "9fd01c8eb87c2a316f78a066728582bf",
".git/objects/a0/11345f3165e089e09d115c37682d526ce4fc8e": "ec2a9571ca65b5138499be8bd5b1a718",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/aba83ce0832d7ac678becf06d374bb43d5c0d0": "9cb60daf46de48003a0d42e9058f9063",
".git/objects/a6/ee0bf873fd8ef08609eb5c18f258760bc27a06": "fad80448c77dfacfa28b7b9e120cc3d4",
".git/objects/a9/b1e06143fbdc1969682ce92d11be03e3bf1adb": "ab3687fda8953edb82eaf9add00873a8",
".git/objects/ab/62a708d54cded286b0fc1f43f10b7f32aec98d": "bb87ca365b61da38f63e35432c124af1",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/b36d97b5a7385815bd7a9997cef71e16c9f1e1": "a7a2a34f61b3aaf3d1db1bcd00cea918",
".git/objects/b3/39511b02ea2c25722c8c975e7018e8efcaa217": "ebc7d00269e713e9c274f2b98bd052e7",
".git/objects/b3/92bdaf48e010bfd1bd102162c153b0c5665379": "d20b69a7ff2adac380ac6c509a8a87e7",
".git/objects/b7/2087ad3f4c0c8f8289481fc6fe432e93675c17": "cfec71f51d58d6b46ae6ce419faec446",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/c6a66ca1ea323ab99bddc2b6d554bcf4b00d97": "3a0e9cd1fc71b57709f84b523ace13b0",
".git/objects/c6/88c5c539ddc67a606ac47e078fb2d4fc7e6759": "f34c3b37a9c48e19f5801b900b33f873",
".git/objects/cd/1be19b5c62809d906df976894c1042a27f1412": "b7468bf5cc5d3c920f97af05ef8c6315",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e1042bf9ec728e8ae85ee0bf00dd673f20d517": "c13ffa13d54ccac958eb6948e17b4765",
".git/objects/d1/1878d7bb60d418918eb76bbc90aab8c3954660": "074d195e1811ab7e9ddc5ff40d50f16a",
".git/objects/d5/516bf9d79c57a1f6dd17891914068aa2ee1d53": "9e5426cc99f464db6f58b658d172536e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/a7b3411aab20be7e8aa76ca487c2908e630382": "600fc412de0665c5b77b7992b7ddd491",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/1966a0826d1d8a62f423f6752b3b32bdf66c5a": "06694ed635a689341e979eb3e9db2c8a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/1bd1f1370f0147ce1395d53601da8827d64fd5": "f5cf9139f73dfa79fe92b97ab1448892",
".git/objects/f5/f2e4aa8ef8578d532eb11cfe956dd651d4962c": "41dac1b6e1a944c916174d641c091dd9",
".git/refs/heads/main": "78475dd725f706a79423f67065ad9a19",
".git/refs/remotes/origin/main": "78475dd725f706a79423f67065ad9a19",
"assets/AssetManifest.json": "bcb4c17d0c1094a8fc5557b1c7acf60c",
"assets/assets/GreatVibes-Regular.ttf": "4bd0ed00ca8deac6c6706a092d9afd13",
"assets/assets/PoiretOne-Regular.ttf": "8d15f9c0d468e1de889e81fae1087b61",
"assets/assets/Questrial-Regular.ttf": "74a3a9121f919fdb9e61ee96b545ed1e",
"assets/assets/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/FontManifest.json": "5f84a5bade2a8a39dff63011d04171e5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3be2f1788be2f40ca986382c316d44dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0696bc5e3fbe387aeef13f069510308",
"/": "c0696bc5e3fbe387aeef13f069510308",
"main.dart.js": "9534cc84593609d1042a55675d0e5f5f",
"manifest.json": "2a5c87977df6493e052f18e46eebd8e1",
"version.json": "d2b0336a9398dd402dbed12e20775b4e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
