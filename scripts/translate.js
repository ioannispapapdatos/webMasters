// function googleTranslateElementInit2() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en", autoDisplay: false },
//     "google_translate_element2"
//   );
// }

// eval(
//   (function (p, a, c, k, e, r) {
//     e = function (c) {
//       return (
//         (c < a ? "" : e(parseInt(c / a))) +
//         ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//       );
//     };
//     if (!"".replace(/^/, String)) {
//       while (c--) r[e(c)] = k[c] || e(c);
//       k = [
//         function (e) {
//           return r[e];
//         },
//       ];
//       e = function () {
//         return "\\w+";
//       };
//       c = 1;
//     }
//     while (c--)
//       if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
//     return p;
//   })(
//     "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
//     43,
//     43,
//     "||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500".split(
//       "|"
//     ),
//     0,
//     {}
//   )
// );

// //

function googleTranslateElementInit2() {
  new google.translate.TranslateElement(
    { pageLanguage: "el", autoDisplay: false },
    "google_translate_element2"
  );
}
if (!window.gt_translate_script) {
  window.gt_translate_script = document.createElement("script");
  gt_translate_script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2";
  document.body.appendChild(gt_translate_script);
}

function GTranslateGetCurrentLang() {
  var keyValue = document["cookie"].match("(^|;) ?googtrans=([^;]*)(;|$)");
  return keyValue ? keyValue[2].split("/")[2] : null;
}
function GTranslateFireEvent(element, event) {
  try {
    if (document.createEventObject) {
      var evt = document.createEventObject();
      element.fireEvent("on" + event, evt);
    } else {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true);
      element.dispatchEvent(evt);
    }
  } catch (e) {}
}
function doGTranslate(lang_pair) {
  if (lang_pair.value) lang_pair = lang_pair.value;
  if (lang_pair == "") return;
  var lang = lang_pair.split("|")[1];
  if (GTranslateGetCurrentLang() == null && lang == lang_pair.split("|")[0])
    return;
  if (typeof ga == "function") {
    ga(
      "send",
      "event",
      "GTranslate",
      lang,
      location.hostname + location.pathname + location.search
    );
  }
  var teCombo;
  var sel = document.getElementsByTagName("select");
  for (var i = 0; i < sel.length; i++)
    if (sel[i].className.indexOf("goog-te-combo") != -1) {
      teCombo = sel[i];
      break;
    }
  if (
    document.getElementById("google_translate_element2") == null ||
    document.getElementById("google_translate_element2").innerHTML.length ==
      0 ||
    teCombo.length == 0 ||
    teCombo.innerHTML.length == 0
  ) {
    setTimeout(function () {
      doGTranslate(lang_pair);
    }, 500);
  } else {
    teCombo.value = lang;
    GTranslateFireEvent(teCombo, "change");
    GTranslateFireEvent(teCombo, "change");
  }
}
