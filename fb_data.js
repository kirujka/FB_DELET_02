/* Forumsbeitrag — конструктор v0.2 «черновик до корректора» (17.11.2026)
   Deutsch-Test für den Beruf B2, «Sprachbausteine und Schreiben», Aufgabe 58. Источник: build_fb.py (claude/FB_v02_build.py в проекте).
   Метки у каждой строки: orig = ТВОЁ · ok = ДА (утверждено Кириллом, язык — корректору) · neu = СОВЕТ (Claude, не решено)
                          wahl = ВЫБОР (решает Кирилл с корректором) · alt = БЫЛО (v0.1, заменено, не учить)
   К каждой немецкой единице — русский перевод. */

const DATA_VERSION = "0.2";

const HERKUNFT = {
 "orig": {
  "label": "ТВОЁ",
  "ru": "из твоего шаблона — не меняется"
 },
 "ok": {
  "label": "ДА",
  "ru": "ты сказал «да» — язык ещё смотрит корректор"
 },
 "neu": {
  "label": "СОВЕТ",
  "ru": "совет Claude — ты ещё не решил"
 },
 "wahl": {
  "label": "ВЫБОР",
  "ru": "несколько вариантов — выбираешь ты вместе с корректором"
 },
 "alt": {
  "label": "БЫЛО",
  "ru": "было в v0.1 — заменено, не учить"
 }
};

const BLOECKE = [
 {
  "id": "1",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Anrede",
  "ru": "Приветствие",
  "rahmen": {
   "de": "Hallo zusammen!",
   "ru": "Всем привет!"
  },
  "slots": [],
  "falle": "Форум внутри фирмы — обращение на «ihr» ко всем коллегам. Дальше в тексте только ihr / euch / eure, не Sie.",
  "c1": []
 },
 {
  "id": "2",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Einstieg",
  "ru": "Вход в тему — о чём спорят",
  "rahmen": {
   "de": "Im Team wird über [THEMA] gestritten.",
   "ru": "В команде спорят о [ТЕМЕ]."
  },
  "slots": [
   {
    "de": "[ГОЛОВА] in Sachen [СЛОВО]",
    "ru": "[голова] насчёт [слова]",
    "herkunft": "neu",
    "note": "НОВЫЙ СПОСОБ вместо обёртки на -ung. in Sachen = «насчёт»: после него слово без артикля и без падежа. Готово для 30 тем — вкладка «Тренажёр»",
    "joker": true,
    "key": "formel"
   },
   {
    "de": "[точное составное слово]",
    "ru": "[точное слово темы]",
    "herkunft": "neu",
    "note": "знакомая тема — одно точное слово, как у учителя (die neue Anwesenheitspflicht). Список — ниже",
    "key": "exakt"
   }
  ],
  "gruppen": [
   {
    "titel": "Что ставить вместо [ГОЛОВА] — в твою рамку как в словаре (в скобках — для рамки учителя «von …», Dativ)",
    "herkunft": "neu",
    "items": [
     {
      "de": "die neuen Pläne (den neuen Plänen)",
      "ru": "новые планы",
      "herkunft": "neu",
      "note": "ДЖОКЕР — любая тема",
      "joker": true
     },
     {
      "de": "die neue Pflicht (der neuen Pflicht)",
      "ru": "новая обязанность",
      "herkunft": "neu",
      "note": "обязывают"
     },
     {
      "de": "die neuen Kosten (den neuen Kosten)",
      "ru": "новые расходы",
      "herkunft": "neu",
      "note": "платим мы"
     },
     {
      "de": "die neuen Einschränkungen (den neuen Einschränkungen)",
      "ru": "новые ограничения",
      "herkunft": "neu",
      "note": "отнимают, запрещают"
     },
     {
      "de": "das neue Angebot (dem neuen Angebot)",
      "ru": "новое предложение",
      "herkunft": "neu",
      "note": "фирма что-то даёт"
     },
     {
      "de": "die geplante Umstellung (der geplanten Umstellung)",
      "ru": "планируемая перестройка",
      "herkunft": "neu",
      "note": "перестраивают работу"
     },
     {
      "de": "die beiden Vorschläge (den beiden Vorschlägen)",
      "ru": "оба предложения",
      "herkunft": "neu",
      "note": "выбор А или Б"
     }
    ]
   },
   {
    "titel": "Три рамки — пробуешь все три, выбираешь ту, что лучше запоминается",
    "herkunft": "wahl",
    "items": [
     {
      "de": "Im Team wird gerade über [ГОЛОВА] in Sachen [СЛОВО] gestritten.",
      "ru": "В команде сейчас спорят о [голове] насчёт [слова].",
      "herkunft": "orig",
      "note": "твоя рамка; слово gerade (сейчас) добавил Claude"
     },
     {
      "de": "Ich habe gerade von [ГОЛОВА, Dativ] in Sachen [СЛОВО] erfahren und bin ehrlich gesagt ziemlich sauer darüber.",
      "ru": "Я только что узнал о [голове] насчёт [слова] и, честно говоря, довольно зол из-за этого.",
      "herkunft": "wahl",
      "note": "рамка учителя (урок 11.11)"
     },
     {
      "de": "Im Team wird gerade über [ГОЛОВА] in Sachen [СЛОВО] gestritten, und ich bin ehrlich gesagt ziemlich sauer darüber.",
      "ru": "В команде сейчас спорят о [голове] насчёт [слова], и я, честно говоря, довольно зол из-за этого.",
      "herkunft": "wahl",
      "note": "твоя рамка + хвост учителя"
     },
     {
      "de": "Wie ihr sicher mitbekommen habt, will die Geschäftsleitung in Sachen [СЛОВО] einiges ändern.",
      "ru": "Как вы наверняка заметили, руководство хочет кое-что изменить насчёт [слова].",
      "herkunft": "neu",
      "note": "запасная: нужна только область, голова не нужна"
     }
    ]
   },
   {
    "titel": "Слой 2 — точные слова для знакомых тем (№ темы из тренажёра)",
    "herkunft": "neu",
    "items": [
     {
      "de": "№1 · die neue Kleiderordnung",
      "ru": "новый дресс-код",
      "herkunft": "neu"
     },
     {
      "de": "№2 · die geplante Samstagsarbeit",
      "ru": "планируемая работа по субботам",
      "herkunft": "neu"
     },
     {
      "de": "№4 · die neuen Parkgebühren",
      "ru": "новые сборы за парковку",
      "herkunft": "neu"
     },
     {
      "de": "№7 · die neue Pflichtschulung",
      "ru": "новое обязательное обучение",
      "herkunft": "neu"
     },
     {
      "de": "№8 · die neue Du-Kultur",
      "ru": "новая культура «на ты»",
      "herkunft": "neu"
     },
     {
      "de": "№9 · die neue Anwesenheitspflicht",
      "ru": "новая обязанность присутствовать",
      "herkunft": "neu"
     },
     {
      "de": "№10 · die ständige Erreichbarkeit",
      "ru": "постоянное «быть на связи»",
      "herkunft": "neu"
     },
     {
      "de": "№14 · die neue Überstundenregelung",
      "ru": "новое правило о сверхурочных",
      "herkunft": "neu"
     },
     {
      "de": "№15 · die geplanten Energiesparmaßnahmen",
      "ru": "планируемые меры экономии энергии",
      "herkunft": "neu"
     },
     {
      "de": "№16 · die fleischlose Kantine",
      "ru": "столовая без мяса",
      "herkunft": "neu"
     },
     {
      "de": "№19 · die geplante Betriebskita",
      "ru": "планируемый детсад фирмы",
      "herkunft": "neu"
     },
     {
      "de": "№21 · die neue Gesundheitsprämie",
      "ru": "новая премия за здоровье",
      "herkunft": "neu"
     },
     {
      "de": "№22 · die verkürzte Mittagspause",
      "ru": "сокращённый обеденный перерыв",
      "herkunft": "neu"
     },
     {
      "de": "№23 · die geplanten Online-Besprechungen",
      "ru": "планируемые онлайн-совещания",
      "herkunft": "neu"
     },
     {
      "de": "№26 · das geplante Großraumbüro",
      "ru": "планируемый опен-спейс",
      "herkunft": "neu"
     }
    ]
   },
   {
    "titel": "Рамки из v0.1 — тоже ещё на выбор",
    "herkunft": "wahl",
    "items": [
     {
      "key": "r2",
      "herkunft": "wahl",
      "de": "[THEMA] sorgt in unserem Team derzeit für heftige Diskussionen.",
      "ru": "[ТЕМА] сейчас вызывает в нашей команде горячие споры.",
      "note": "Nomen-Verb-Verbindung «für Diskussionen sorgen». ⚠ derzeit — и в следующем предложении 2б"
     },
     {
      "key": "r3",
      "herkunft": "wahl",
      "de": "Seit Kurzem wird in unserem Team intensiv über [THEMA] diskutiert.",
      "ru": "С недавних пор в нашей команде активно обсуждают [ТЕМУ].",
      "note": "Passiv"
     },
     {
      "key": "r4",
      "herkunft": "wahl",
      "de": "Wie ihr sicher schon wisst, hat die Geschäftsleitung [THEMA] angekündigt, was in unserem Team für viel Gesprächsstoff sorgt.",
      "ru": "Как вы наверняка знаете, руководство объявило о [ТЕМЕ], и это даёт команде много поводов для разговоров.",
      "note": "длиннее всех; relativer Anschluss «was»"
     }
    ]
   },
   {
    "titel": "Было в v0.1 — обёртка на -ung (корректор забраковал: по сути перепечатка задания)",
    "herkunft": "alt",
    "items": [
     {
      "de": "die geplante [Hülle auf -ung] + [что / чего]",
      "ru": "планируемом [введении / отмене / переходе …] + [чего]",
      "herkunft": "alt"
     },
     {
      "de": "die geplante Einführung einer einheitlichen Dienstkleidung",
      "ru": "планируемом введении единой рабочей одежды",
      "herkunft": "alt",
      "note": "пример v0.1, тема 1"
     }
    ]
   }
  ],
  "falle": "Не копировать задание и не ставить «das Thema „…“» — сразу 0. Одно слово из задания можно (учитель тоже оставил Team-Meetings), предложение — нельзя. Голова в твоей рамке (über) пишется как в словаре, в рамке учителя (von) — Dativ. Вход работает, только если дальше в тексте стоят слова именно этой темы: второе предложение, пример, слова после довода 1.",
  "c1": [
   "«in Sachen» + существительное без артикля",
   "Passiv «wird … gestritten»"
  ]
 },
 {
  "id": "3",
  "kreis": 1,
  "herkunft": "neu",
  "de": "Inhalt",
  "ru": "О чём речь — второе предложение",
  "rahmen": {
   "de": "[X] soll es dann nicht mehr geben.",
   "ru": "[X] тогда больше не будет."
  },
  "slots": [
   {
    "de": "Die Teilnahme wäre dann für alle Pflicht.",
    "ru": "Участие тогда было бы обязательным для всех.",
    "herkunft": "neu",
    "note": "обязаловка · вне рабочего времени добавь: – und zwar nach Feierabend (причём после работы)"
   },
   {
    "de": "[X] müssten wir aus eigener Tasche bezahlen.",
    "ru": "[X] нам пришлось бы платить из своего кармана.",
    "herkunft": "neu",
    "note": "платим мы"
   },
   {
    "de": "Geplant ist [ein / eine X].",
    "ru": "Планируется [X].",
    "herkunft": "neu",
    "note": "фирма что-то даёт"
   },
   {
    "de": "Beides zusammen soll es leider nicht geben.",
    "ru": "И то и другое вместе, к сожалению, не дадут.",
    "herkunft": "neu",
    "note": "выбор А или Б — без вставки"
   },
   {
    "de": "Die Änderung soll schon bald für alle gelten.",
    "ru": "Изменение скоро должно действовать для всех.",
    "herkunft": "neu",
    "note": "не придумал [X] — без вставки",
    "joker": true
   }
  ],
  "gruppen": [
   {
    "titel": "Было в v0.1 — блок «актуальность» (ты согласен убрать, 16.11)",
    "herkunft": "alt",
    "items": [
     {
      "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
      "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы.",
      "herkunft": "alt"
     }
    ]
   }
  ],
  "falle": "Пишешь не что вводят, а что ИСЧЕЗАЕТ или что это значит для нас — словами, которых нет в задании. [X] — множественное число без артикля: Fleischgerichte, Freie Samstage. Готовые вставки для 30 тем — вкладка «Тренажёр». Это предложение стоит на месте старого блока «актуальность».",
  "c1": [
   "Konjunktiv II «wäre», «müssten»"
  ]
 },
 {
  "id": "4",
  "kreis": 1,
  "herkunft": "ok",
  "de": "Position",
  "ru": "Моя позиция — тезис",
  "rahmen": {
   "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
   "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов."
  },
  "slots": [],
  "gruppen": [
   {
    "titel": "Тема-ВЫБОР (entweder … oder / statt) — зеркальная форма",
    "herkunft": "wahl",
    "items": [
     {
      "key": "t4",
      "herkunft": "wahl",
      "de": "Ich persönlich würde mich eindeutig für [вариант A, Akk.] entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
      "ru": "Я бы однозначно выбрал [вариант A], так как этот вариант положительно влияет на нашу рабочую среду.",
      "note": "für + Akkusativ: für den Zuschuss / für das Fahrrad / für die Urlaubstage"
     }
    ]
   },
   {
    "titel": "Особые темы — смягчить «ни в коем случае» (иначе звучит неправдоподобно)",
    "herkunft": "neu",
    "items": [
     {
      "de": "Das Ziel finde ich richtig, den Weg dorthin allerdings nicht.",
      "ru": "Цель считаю правильной, а путь к ней — нет.",
      "herkunft": "neu",
      "note": "благородная цель: безопасность, экология, здоровье"
     },
     {
      "de": "Ich sehe diese Maßnahme eher skeptisch, obwohl sie auf den ersten Blick attraktiv klingt.",
      "ru": "Я отношусь к этой мере скорее скептически, хотя на первый взгляд она звучит привлекательно.",
      "herkunft": "neu",
      "note": "фирма дарит: спортзал, фрукты, ноутбук"
     }
    ]
   },
   {
    "titel": "Было в v0.1",
    "herkunft": "alt",
    "items": [
     {
      "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
      "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду.",
      "herkunft": "alt",
      "note": "«рабочая среда» не подходит к темам про деньги"
     }
    ]
   }
  ],
  "falle": "Начало твоё, новый только хвост после «da sie». Это тезис: после плюса к нему возвращаешься (блок 9+), так текст выглядит выстроенным. Тема-выбор (entweder … oder) — зеркальная форма из группы ниже.",
  "c1": [
   "Kausalsatz mit «da»",
   "Vergleich «mehr … als»"
  ]
 },
 {
  "id": "5",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Grund 1",
  "ru": "Довод 1 — главный минус",
  "rahmen": {
   "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass [X].",
   "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что [X]."
  },
  "slots": [
   {
    "key": "kosten",
    "joker": true,
    "herkunft": "orig",
    "de": "die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert",
    "ru": "реализация требует больших финансовых средств и высоких организационных затрат",
    "note": "ДЖОКЕР, когда платит фирма · тип T5 (фирма что-то даёт)"
   },
   {
    "de": "eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind",
    "ru": "такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные",
    "herkunft": "ok",
    "note": "ДЖОКЕР, где деньги не работают (ты: «звучит круто, можно брать») · запреты, перестройка, обязаловка",
    "joker": true,
    "key": "passt"
   },
   {
    "de": "das Geld an anderer Stelle deutlich sinnvoller eingesetzt werden könnte",
    "ru": "деньги можно было бы гораздо разумнее вложить в другое",
    "herkunft": "neu",
    "note": "усилитель к «дорого»",
    "key": "anders"
   },
   {
    "key": "kosten2",
    "herkunft": "wahl",
    "de": "die Umsetzung sowohl große finanzielle Mittel als auch einen hohen organisatorischen Aufwand erfordert",
    "ru": "реализация требует как больших финансовых средств, так и высоких организационных затрат",
    "note": "ВЫБОР: тот же джокер + двойной союз sowohl … als auch (+2 слова, +1 флаг)"
   },
   {
    "key": "freizeit",
    "herkunft": "ok",
    "de": "die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten",
    "ru": "сотрудникам пришлось бы пожертвовать частью свободного времени",
    "note": "T1 — обязаловка, суббота, вне рабочего времени, «всегда на связи»"
   },
   {
    "key": "belastung",
    "herkunft": "ok",
    "de": "dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht",
    "ru": "для сотрудников из-за этого возникает дополнительная финансовая нагрузка",
    "note": "T2 — платят сотрудники"
   },
   {
    "key": "flex",
    "herkunft": "ok",
    "de": "den Mitarbeitern dadurch ein Stück Flexibilität genommen wird",
    "ru": "у сотрудников из-за этого отнимают часть свободы",
    "note": "T3 — урезают, запрещают"
   },
   {
    "key": "integr",
    "herkunft": "ok",
    "de": "sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt",
    "ru": "это изменение трудно встроить в наши повседневные рабочие процессы",
    "note": "T6 — перестройка, новые правила"
   },
   {
    "key": "druck",
    "herkunft": "ok",
    "de": "dadurch ein erheblicher Druck auf die Mitarbeiter entsteht",
    "ru": "из-за этого на сотрудников ложится сильное давление",
    "note": "контроль, наказания, «всегда на связи», премия за «не болел»"
   },
   {
    "key": "mehraufwand",
    "herkunft": "ok",
    "de": "dadurch ein erheblicher Mehraufwand für die Kollegen entsteht",
    "ru": "из-за этого у коллег появляется много дополнительной работы",
    "note": "стажёры, наставничество, уборка самим, новые процессы"
   }
  ],
  "gruppen": [
   {
    "titel": "Тема-ВЫБОР — зеркальная форма: «Ein wesentlicher Vorteil ist, dass …»",
    "herkunft": "wahl",
    "items": [
     {
      "key": "pro1",
      "joker": true,
      "herkunft": "wahl",
      "de": "diese Variante den Bedürfnissen der meisten Kollegen besser entspricht",
      "ru": "этот вариант лучше отвечает потребностям большинства коллег",
      "note": "джокер для темы-выбора"
     },
     {
      "key": "pro2",
      "herkunft": "wahl",
      "de": "alle Kollegen gleichermaßen davon profitieren können",
      "ru": "все коллеги могут в равной мере извлечь из этого пользу"
     },
     {
      "key": "pro3",
      "herkunft": "wahl",
      "de": "sie langfristig einen größeren Nutzen bringt",
      "ru": "в долгосрочной перспективе он приносит больше пользы"
     }
    ]
   },
   {
    "titel": "Запасные доводы — отбракуй лишнее вместе с корректором",
    "herkunft": "wahl",
    "items": [
     {
      "de": "der Nutzen in keinem Verhältnis zum Aufwand steht",
      "ru": "польза несоразмерна затратам",
      "herkunft": "wahl",
      "note": "самый универсальный"
     },
     {
      "de": "das eigentliche Problem dadurch gar nicht gelöst wird",
      "ru": "сама проблема этим вовсе не решается",
      "herkunft": "wahl",
      "note": "где названа цель меры"
     },
     {
      "de": "diese Entscheidung über unsere Köpfe hinweg getroffen wurde",
      "ru": "это решение приняли через наши головы",
      "herkunft": "wahl",
      "note": "не для тем-выбора"
     },
     {
      "de": "sich so etwas nicht von oben verordnen lässt",
      "ru": "такое нельзя предписать сверху",
      "herkunft": "wahl",
      "note": "«ты», музыка, сад, праздники"
     },
     {
      "de": "die Regelung im Alltag kaum zu kontrollieren ist",
      "ru": "это правило в быту почти невозможно проконтролировать",
      "herkunft": "wahl",
      "note": "только запреты"
     },
     {
      "de": "darunter die Motivation im Team leidet",
      "ru": "от этого страдает мотивация в команде",
      "herkunft": "wahl",
      "note": "не для «фирма даёт»"
     },
     {
      "de": "sich viele Kollegen dadurch unter Druck gesetzt fühlen",
      "ru": "многие коллеги из-за этого чувствуют, что на них давят",
      "herkunft": "wahl",
      "note": "наказания, премия за «не болел»"
     },
     {
      "de": "dadurch das Vertrauen zwischen Geschäftsleitung und Mitarbeitern leidet",
      "ru": "от этого страдает доверие между руководством и сотрудниками",
      "herkunft": "wahl",
      "note": "контроль, запреты"
     },
     {
      "de": "dadurch die Arbeitsbelastung für alle spürbar steigt",
      "ru": "из-за этого нагрузка для всех заметно растёт",
      "herkunft": "wahl",
      "note": "стажёры, суббота, уборка самим"
     }
    ]
   }
  ],
  "falle": "После двоеточия целое предложение — с большой буквы: «Erstens: Ein …» (в исходнике было «ein»). После dass глагол в конце: … erfordert / … müssten / … entsteht. dadurch = «из-за этого», стоит сразу после dass или после подлежащего. ЛОВУШКА ПОВТОРА: если довод 1 — «подходит не каждому», довод 2 «unfair» повторяет ту же мысль → во втором доводе бери другой (блок 6).",
  "c1": [
   "Konjunktiv II «müssten»",
   "Passiv «genommen wird»",
   "Passiversatz «sich … integrieren lässt»",
   "Doppelkonnektor «sowohl … als auch» (вариант)"
  ]
 },
 {
  "id": "5b",
  "kreis": 1,
  "herkunft": "ok",
  "de": "Wörter zum Thema",
  "ru": "Сразу после довода 1 — слова темы (место одно)",
  "rahmen": {
   "de": "Themen wie [A], [B] und [C] spielen dabei eine große Rolle.",
   "ru": "Такие темы, как [A], [B] и [C], играют при этом большую роль."
  },
  "slots": [
   {
    "de": "Bei uns fehlen leider [A] und [B].",
    "ru": "У нас, к сожалению, не хватает [A] и [B].",
    "herkunft": "ok",
    "note": "Р1 — можно и сразу после второго предложения"
   },
   {
    "de": "[A] und [B] sind für viele Kollegen ein echtes Problem.",
    "ru": "[A] и [B] — настоящая проблема для многих коллег.",
    "herkunft": "ok",
    "note": "Р2 — можно и сразу после второго предложения"
   },
   {
    "de": "Dabei denke ich vor allem an [A], [B] und [C].",
    "ru": "При этом я думаю прежде всего о [A], [B] и [C].",
    "herkunft": "ok",
    "note": "Р4 — только после довода (dabei)"
   }
  ],
  "gruppen": [
   {
    "titel": "Образец — тема Homeoffice",
    "herkunft": "ok",
    "items": [
     {
      "de": "Erstens: Ein wesentlicher Nachteil ist, dass eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind. Dabei denke ich vor allem an kleine Wohnungen, fehlende Arbeitszimmer und langsame Internetverbindungen.",
      "ru": "Во-первых, существенный недостаток в том, что такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные. При этом я думаю прежде всего о маленьких квартирах, отсутствии рабочих комнат и медленном интернете.",
      "herkunft": "ok"
     },
     {
      "de": "Bei uns fehlen leider Coworking-Plätze und ruhige Arbeitsräume.",
      "ru": "У нас, к сожалению, не хватает коворкингов и тихих рабочих помещений.",
      "herkunft": "ok",
      "note": "твоё предложение с экзамена в рамке Р1"
     }
    ]
   },
   {
    "titel": "Вариант 2 — «предложение потери»: слов мало, учится целиком (выбор по вопросу «что мы теряем?»)",
    "herkunft": "neu",
    "items": [
     {
      "de": "Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.",
      "ru": "Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.",
      "herkunft": "neu",
      "note": "деньги"
     },
     {
      "de": "Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.",
      "ru": "После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.",
      "herkunft": "neu",
      "note": "время"
     },
     {
      "de": "Auf Dauer würden darunter unser Wohlbefinden und unsere Leistungsfähigkeit leiden.",
      "ru": "Со временем от этого пострадали бы наше самочувствие и работоспособность.",
      "herkunft": "neu",
      "note": "самочувствие, нагрузка"
     },
     {
      "de": "Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.",
      "ru": "У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.",
      "herkunft": "neu",
      "note": "еда, перерывы"
     },
     {
      "de": "Ein gutes Betriebsklima entsteht durch Wertschätzung und nicht durch Vorschriften.",
      "ru": "Хорошая атмосфера на работе возникает из уважения, а не из предписаний.",
      "herkunft": "neu",
      "note": "атмосфера в команде"
     },
     {
      "de": "Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.",
      "ru": "При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.",
      "herkunft": "neu",
      "note": "концентрация"
     },
     {
      "de": "Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.",
      "ru": "Строгий контроль разрушает доверие и самостоятельность сотрудников.",
      "herkunft": "neu",
      "note": "доверие, контроль"
     },
     {
      "de": "Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.",
      "ru": "Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.",
      "herkunft": "neu",
      "note": "тема про экологию"
     },
     {
      "de": "Eine Weiterbildung bringt nur dann etwas, wenn sie zur eigenen Tätigkeit passt.",
      "ru": "Обучение приносит пользу только тогда, когда оно подходит к собственной работе.",
      "herkunft": "neu",
      "note": "тема про обучение"
     }
    ]
   },
   {
    "titel": "Вариант 3 — универсальное раскрытие (ничего не подошло)",
    "herkunft": "neu",
    "items": [
     {
      "de": "Was für den einen kein Problem ist, bedeutet für den anderen eine echte Belastung – zum Beispiel für [ГРУППА].",
      "ru": "То, что для одного не проблема, для другого настоящая нагрузка — например для [группы].",
      "herkunft": "neu",
      "note": "[ГРУППА]: Kollegen mit Familie oder mit gesundheitlichen Problemen (коллег с семьёй или с проблемами со здоровьем) · Eltern (родителей) · Pendler (тех, кто ездит издалека) · ältere Kollegen (старших коллег) · Raucher (курящих)"
     }
    ]
   }
  ],
  "falle": "Место ОДНО — берёшь одно из трёх: тема знакомая, слова есть → рамка-список (больше всего слов темы); слов мало → «предложение потери»; ничего не подошло → раскрытие. Правило вставки: слова во множественном числе или без артикля (Lärm, Stress, Internet); прилагательное всегда на -e (hohe Kosten, lange Wege). Самая лёгкая — рамка «Themen wie …»: слова как в словаре. Р3 и Р4 начинаются с dabei — только после довода. Не больше двух рамок на текст; вторая — после довода 2.",
  "c1": [
   "Aufzählung ohne Artikel — перечисление без артикля"
  ]
 },
 {
  "id": "6",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Grund 2",
  "ru": "Довод 2 — несправедливость",
  "rahmen": {
   "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
   "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
  },
  "slots": [],
  "gruppen": [
   {
    "titel": "Тема-ВЫБОР — зеркальная форма",
    "herkunft": "wahl",
    "items": [
     {
      "key": "t4b",
      "herkunft": "wahl",
      "de": "Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.",
      "ru": "Кроме того, многие коллеги могли бы воспринять это решение как более справедливое."
     }
    ]
   },
   {
    "titel": "Если довод 1 был «подходит не каждому» — вместо unfair (ловушка повтора)",
    "herkunft": "neu",
    "items": [
     {
      "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
      "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
      "herkunft": "neu",
      "joker": true
     },
     {
      "de": "Zudem wurde diese Entscheidung über unsere Köpfe hinweg getroffen.",
      "ru": "Кроме того, это решение приняли через наши головы.",
      "herkunft": "neu"
     },
     {
      "de": "Zudem steht der Nutzen in keinem Verhältnis zum Aufwand.",
      "ru": "Кроме того, польза несоразмерна затратам.",
      "herkunft": "neu"
     }
    ]
   }
  ],
  "falle": "Джокер ко всем типам. als … empfunden werden — «восприниматься как» (рус. «воспринимается КАК несправедливая» — совпадает). zu + Dativ: zu Unzufriedenheit führen. После Zudem глагол идёт сразу: Zudem leidet … / Zudem wurde … / Zudem steht …",
  "c1": [
   "Konjunktiv II «könnte»",
   "Passiv mit Modalverb «empfunden werden»",
   "Nomen-Verb-Verbindung «zu … führen»"
  ]
 },
 {
  "id": "7",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Beispiel",
  "ru": "Пример",
  "rahmen": {
   "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
   "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
  },
  "slots": [
   {
    "de": "Beispielsweise hat ein Unternehmen aus unserer Branche diese Maßnahme bereits vor zwei Jahren getestet, jedoch keine guten Ergebnisse erzielt.",
    "ru": "Например, одна компания из нашей отрасли уже два года назад опробовала эту меру, однако не добилась хороших результатов.",
    "herkunft": "neu",
    "note": "те же слова + 2 детали (из нашей отрасли, два года назад) — выдумка звучит правдоподобнее"
   }
  ],
  "gruppen": [
   {
    "titel": "Тема-ВЫБОР — зеркальная форма",
    "herkunft": "wahl",
    "items": [
     {
      "key": "t4c",
      "herkunft": "wahl",
      "de": "Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
      "ru": "Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его."
     }
    ]
   },
   {
    "titel": "7б · Личный опыт — для событий (праздник, поездка) и тем-выбора (решено тобой 11.11; язык вставок — корректору)",
    "herkunft": "ok",
    "items": [
     {
      "de": "Aus meiner früheren Firma kenne ich eine ähnliche Situation: Dort [что было], und am Ende [чем кончилось].",
      "ru": "Я знаю похожую ситуацию по своей прежней фирме: там [что было], и в итоге [чем кончилось].",
      "herkunft": "ok",
      "note": "рамка"
     },
     {
      "de": "Dort wurde eine ähnliche Regelung eingeführt, und am Ende waren viele Kollegen unzufrieden.",
      "ru": "Там ввели похожее правило, и в итоге многие коллеги были недовольны.",
      "herkunft": "ok",
      "note": "джокер целиком — к любой теме",
      "joker": true
     },
     {
      "de": "Dort sollte jeder Geld für eine Feier geben, und am Ende fühlten sich viele Kollegen unter Druck gesetzt.",
      "ru": "Там каждый должен был сдавать деньги на праздник, и в итоге многие коллеги чувствовали давление.",
      "herkunft": "ok",
      "note": "образец, одобрен дословно"
     },
     {
      "de": "mussten alle Mitarbeiter an Veranstaltungen in ihrer Freizeit teilnehmen",
      "ru": "все сотрудники должны были участвовать в мероприятиях в свободное время",
      "herkunft": "ok",
      "note": "[что было] · T1"
     },
     {
      "de": "wurde [die Raucherpause …] plötzlich abgeschafft",
      "ru": "[перекуры …] вдруг отменили",
      "herkunft": "ok",
      "note": "[что было] · T3"
     },
     {
      "de": "wurde [ein Fitnessraum …] eingerichtet, aber kaum genutzt",
      "ru": "открыли [спортзал …], но им почти не пользовались",
      "herkunft": "ok",
      "note": "[что было] · T5"
     },
     {
      "de": "wurde die Arbeit auf [ein Großraumbüro …] umgestellt",
      "ru": "работу перевели на [опен-спейс …]",
      "herkunft": "ok",
      "note": "[что было] · T6"
     },
     {
      "de": "sank die Motivation im Team deutlich",
      "ru": "мотивация в команде заметно упала",
      "herkunft": "ok",
      "note": "[чем кончилось]"
     },
     {
      "de": "wurde die Regelung nach kurzer Zeit wieder abgeschafft",
      "ru": "правило вскоре снова отменили",
      "herkunft": "ok",
      "note": "[чем кончилось]"
     }
    ]
   }
  ],
  "falle": "widerspiegeln — разделяемый: spiegelt … wider (wider в конец главного). Perfekt «hat … getestet, … erzielt» — один hat на оба причастия. Не хватает времени — вторую половину («Insofern …») режешь первой.",
  "c1": [
   "trennbares Verb «widerspiegeln»",
   "Konnektoren «jedoch», «insofern»",
   "Kausalsatz mit «da»"
  ]
 },
 {
  "id": "8",
  "kreis": 1,
  "herkunft": "neu",
  "de": "Beispiel konkret",
  "ru": "Пример по теме — наш отдел",
  "rahmen": {
   "de": "Gerade in unserer Abteilung würde das bedeuten, dass [X].",
   "ru": "Именно в нашем отделе это означало бы, что [X]."
  },
  "slots": [
   {
    "key": "z_joker",
    "joker": true,
    "herkunft": "neu",
    "de": "sich unsere tägliche Arbeit spürbar verschlechtern würde",
    "ru": "наша ежедневная работа заметно ухудшилась бы",
    "note": "джокер"
   },
   {
    "key": "z_t1",
    "herkunft": "neu",
    "de": "viele Kollegen ihre Abende und Wochenenden nicht mehr frei planen könnten",
    "ru": "многие коллеги больше не могли бы свободно планировать вечера и выходные",
    "note": "T1"
   },
   {
    "key": "z_t2",
    "herkunft": "neu",
    "de": "jeder von uns jeden Monat zusätzlich Geld ausgeben müsste",
    "ru": "каждому из нас пришлось бы ежемесячно тратить дополнительные деньги",
    "note": "T2"
   },
   {
    "key": "z_t3",
    "herkunft": "neu",
    "de": "wir deutlich weniger Spielraum bei der Gestaltung unseres Arbeitstages hätten",
    "ru": "у нас было бы гораздо меньше свободы в организации рабочего дня",
    "note": "T3"
   },
   {
    "key": "z_t5",
    "herkunft": "neu",
    "de": "ein großer Teil des Budgets für andere wichtige Projekte fehlen würde",
    "ru": "значительной части бюджета не хватило бы на другие важные проекты",
    "note": "T5"
   },
   {
    "key": "z_t6",
    "herkunft": "neu",
    "de": "wir uns erst monatelang an die neuen Abläufe gewöhnen müssten",
    "ru": "нам пришлось бы месяцами привыкать к новым процессам",
    "note": "T6"
   }
  ],
  "falle": "СОВЕТ: брать обязательно — главный носитель слов темы (4–6 слов) и ответ на «nennen Sie passende Beispiele». На знакомой теме конец — из слов самого задания (готово для 30 тем во вкладке «Образцы»). На незнакомой — собираешь из существительных задания: единственное место, которое надо тренировать отдельно. Konjunktiv II в конце придаточного: würde / müsste / könnten / hätten.",
  "c1": [
   "Konjunktiv II",
   "Nebensatz mit «dass»"
  ]
 },
 {
  "id": "9",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Gegenargument",
  "ru": "Контрдовод — плюс",
  "rahmen": {
   "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass [X].",
   "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что [X]."
  },
  "slots": [
   {
    "key": "arbeitgeber",
    "joker": true,
    "herkunft": "orig",
    "de": "sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann",
    "ru": "компания может позиционировать себя как современный и ответственный работодатель",
    "note": "ДЖОКЕР — к любой теме"
   },
   {
    "key": "umwelt",
    "herkunft": "orig",
    "de": "diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert",
    "ru": "эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании",
    "note": "экология, энергия, мусор, транспорт"
   },
   {
    "de": "ein Teil der Kollegen tatsächlich davon profitieren würde",
    "ru": "часть коллег действительно выиграла бы от этого",
    "herkunft": "neu",
    "note": "новый джокер — зеркало довода «подходит не каждому»",
    "joker": true,
    "key": "teil"
   },
   {
    "de": "die Idee dahinter durchaus nachvollziehbar ist",
    "ru": "сама идея вполне понятна",
    "herkunft": "neu",
    "note": "джокер 2",
    "key": "idee"
   },
   {
    "de": "die Firma dadurch Kosten spart, was langfristig unsere Arbeitsplätze sichert",
    "ru": "фирма экономит, а это надолго сохраняет наши рабочие места",
    "herkunft": "neu",
    "note": "фирма экономит: отопление, онлайн, принтеры",
    "key": "spart"
   },
   {
    "de": "wir dabei tatsächlich etwas Neues lernen könnten",
    "ru": "мы при этом действительно могли бы узнать новое",
    "herkunft": "neu",
    "note": "курсы, семинары",
    "key": "lernen"
   },
   {
    "key": "gesund",
    "herkunft": "ok",
    "de": "die Gesundheit der Mitarbeiter gefördert wird",
    "ru": "укрепляется здоровье сотрудников",
    "note": "здоровье, еда, спорт, стулья"
   },
   {
    "key": "team",
    "herkunft": "ok",
    "de": "der Zusammenhalt im Team gestärkt wird",
    "ru": "укрепляется сплочённость команды",
    "note": "коллектив, обеды, праздники, опен-спейс"
   },
   {
    "key": "effizienz",
    "herkunft": "ok",
    "de": "Arbeitsabläufe effizienter gestaltet werden können",
    "ru": "рабочие процессы можно организовать эффективнее",
    "note": "техника, организация, онлайн, сверхурочные"
   },
   {
    "key": "sparen",
    "herkunft": "ok",
    "de": "die Firma langfristig Kosten sparen kann",
    "ru": "фирма в долгосрочной перспективе может сэкономить",
    "note": "деньги, принтеры, онлайн-встречи"
   },
   {
    "key": "erholung",
    "herkunft": "ok",
    "de": "die Mitarbeiter mehr Zeit zur Erholung haben",
    "ru": "у сотрудников больше времени на отдых",
    "note": "время, отгулы, перерывы"
   },
   {
    "key": "kompetenz",
    "herkunft": "ok",
    "de": "die Mitarbeiter ihre Kompetenzen erweitern können",
    "ru": "сотрудники могут расширить свои компетенции",
    "note": "курсы, обучение, стажёры"
   },
   {
    "key": "sicher",
    "herkunft": "ok",
    "de": "die Sicherheit am Arbeitsplatz erhöht wird",
    "ru": "повышается безопасность на рабочем месте",
    "note": "правила, ТБ, контроль"
   },
   {
    "key": "entlastung",
    "herkunft": "ok",
    "de": "die Mitarbeiter finanziell entlastet werden",
    "ru": "сотрудники получают финансовое облегчение",
    "note": "деньги, зарплата, доплаты"
   }
  ],
  "gruppen": [
   {
    "titel": "Тема-ВЫБОР — зеркальная форма: плюс второго варианта",
    "herkunft": "wahl",
    "items": [
     {
      "key": "t4d",
      "herkunft": "wahl",
      "de": "Jedoch spricht auch einiges für [вариант B, Akk.]: Ein möglicher Vorteil besteht vielleicht darin, dass [X].",
      "ru": "Однако кое-что говорит и в пользу [варианта B]: возможное преимущество, вероятно, в том, что [X]."
     }
    ]
   }
  ],
  "falle": "Исправлена опечатка исходника: «Ein mögliche» → «Ein möglicher»: der Vorteil — мужской род, после ein прилагательное на -er. darin, dass — «в том, что» (рус. «заключается В ТОМ» — совпадает). СОВЕТ: «möglicher» и «vielleicht» говорят одно и то же — vielleicht можно убрать (спроси корректора). Сильный плюс отвечает на вопрос «кому мера выгодна».",
  "c1": [
   "Korrelat «darin, dass»",
   "Passiv «gefördert wird / gestärkt wird»"
  ]
 },
 {
  "id": "9b",
  "kreis": 1,
  "herkunft": "ok",
  "de": "Rückkehr zur These",
  "ru": "Возврат к тезису — плюс не перевешивает",
  "rahmen": {
   "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
   "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы."
  },
  "slots": [
   {
    "de": "Trotz dieses Vorteils überwiegen für mich eindeutig die Nachteile.",
    "ru": "Несмотря на этот плюс, для меня однозначно перевешивают минусы.",
    "herkunft": "wahl",
    "note": "короче (9 слов вместо 17) и даёт trotz + Genitiv — выбрать с корректором"
   }
  ],
  "falle": "Закрывает рамку текста: в блоке 4 ты сказал «минусов больше» — здесь возвращаешься. aufwiegen — разделяемый: wiegt … auf. В теме-выборе (форма Б) не ставится.",
  "c1": [
   "trennbares Verb «aufwiegen»"
  ]
 },
 {
  "id": "10",
  "kreis": 1,
  "herkunft": "wahl",
  "de": "Brücke",
  "ru": "Мостик к блоку 11 — только грамматика",
  "rahmen": {
   "de": "[один из вариантов ниже]",
   "ru": "[один из вариантов ниже]"
  },
  "slots": [
   {
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "herkunft": "wahl",
    "note": "вариант Б — ты склоняешься к нему · je … desto, sich lassen, придаточное с mit der · подходит ко всем темам",
    "joker": true,
    "key": "bB"
   },
   {
    "de": "Angesichts dieser Nachteile sollte eine solche Entscheidung nicht getroffen werden, ohne vorher die Mitarbeiter anzuhören.",
    "ru": "Ввиду этих минусов такое решение не следует принимать, не выслушав сначала сотрудников.",
    "herkunft": "wahl",
    "note": "вариант А — запасной · angesichts + Genitiv, Passiv mit Modalverb, ohne … zu · не брать, если довод был «через наши головы», и в теме-выборе",
    "key": "bA"
   }
  ],
  "gruppen": [
   {
    "titel": "Было в v0.1 — шесть мостиков (заменены одним предложением)",
    "herkunft": "alt",
    "items": [
     {
      "key": "b1",
      "joker": false,
      "herkunft": "alt",
      "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
      "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять.",
      "note": "angesichts + Gen. · sofern · Konj. II · zu-Infinitiv · Passiv"
     },
     {
      "key": "b2",
      "herkunft": "alt",
      "de": "Aufgrund dieser Nachteile halte ich es für notwendig, die Maßnahme noch einmal gründlich zu überprüfen. Falls die Geschäftsleitung auf unsere Bedenken eingehen würde, ließe sich sicherlich ein Kompromiss finden.",
      "ru": "Из-за этих недостатков я считаю необходимым ещё раз тщательно проверить меру. Если бы руководство учло наши сомнения, наверняка удалось бы найти компромисс.",
      "note": "aufgrund + Gen. · halten für · falls · Konj. II · sich lassen",
      "joker": false
     },
     {
      "key": "b3",
      "herkunft": "alt",
      "de": "Statt die Maßnahme sofort einzuführen, wäre es klüger, gemeinsam nach Alternativen zu suchen. Nur wenn die Bedenken der Mitarbeiter ernst genommen werden, kann die Maßnahme auf Akzeptanz stoßen.",
      "ru": "Вместо того чтобы сразу вводить меру, было бы умнее вместе поискать альтернативы. Только если сомнения сотрудников воспримут всерьёз, мера может встретить одобрение.",
      "note": "statt … zu · Konj. II · Passiv · NVV «auf Akzeptanz stoßen»",
      "joker": false
     },
     {
      "key": "b4",
      "herkunft": "alt",
      "de": "Die Entscheidung sollte nicht über unsere Köpfe hinweg getroffen werden, zumal sie viele Kollegen direkt betrifft. Wäre die Geschäftsleitung zu einem offenen Gespräch bereit, könnten wir sicherlich eine Lösung finden, die für alle akzeptabel ist.",
      "ru": "Решение не следует принимать через наши головы, тем более что оно напрямую касается многих коллег. Будь руководство готово к открытому разговору, мы наверняка нашли бы решение, приемлемое для всех.",
      "note": "zumal · Konditional ohne «wenn» · Konj. II · Relativsatz",
      "joker": false
     },
     {
      "key": "b5",
      "herkunft": "alt",
      "de": "Vor diesem Hintergrund wäre es wünschenswert, dass die Geschäftsleitung die Maßnahme noch einmal überdenkt. Je früher die Mitarbeiter in die Entscheidung einbezogen werden, desto größer ist die Chance auf eine Lösung, mit der alle zufrieden sind.",
      "ru": "На этом фоне было бы желательно, чтобы руководство ещё раз обдумало меру. Чем раньше сотрудников вовлекут в решение, тем выше шанс найти решение, которым все будут довольны.",
      "note": "je … desto · Konj. II · Passiv · Relativsatz mit Präposition",
      "joker": false
     },
     {
      "key": "b6",
      "herkunft": "alt",
      "de": "Meiner Ansicht nach sollte die Geschäftsleitung die Maßnahme nicht nur aus wirtschaftlicher Sicht, sondern auch aus Sicht der Mitarbeiter bewerten. Andernfalls ließe sich kaum vermeiden, dass die Motivation im Team spürbar sinkt.",
      "ru": "По-моему, руководству следует оценивать меру не только с экономической точки зрения, но и с точки зрения сотрудников. Иначе вряд ли удастся избежать заметного падения мотивации в команде.",
      "note": "nicht nur … sondern auch · Genitiv · andernfalls · sich lassen",
      "joker": false
     }
    ]
   }
  ],
  "falle": "Мостик нужен только как носитель грамматики высокого уровня и ведёт к блоку 11 («пусть каждый выскажется»). Блок 11 не трогаем, поэтому предложение про пробный период не берётся.",
  "c1": [
   "Doppelkonnektor «je … desto»",
   "Passiversatz «sich lassen»"
  ]
 },
 {
  "id": "11",
  "kreis": 1,
  "herkunft": "orig",
  "de": "Vorschlag",
  "ru": "Предложение",
  "rahmen": {
   "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
   "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
  },
  "slots": [],
  "falle": "Не менять. vorschlagen — разделяемый: schlage … vor.",
  "c1": [
   "trennbares Verb «vorschlagen»"
  ]
 },
 {
  "id": "12",
  "kreis": 1,
  "herkunft": "orig",
  "letzter": true,
  "de": "Schluss",
  "ru": "Финал",
  "rahmen": {
   "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
   "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
  },
  "slots": [],
  "falle": "Не менять. Исправлены только опечатки: Man → Mann, dahinter stehen → dahinterstehen (пишется слитно).",
  "c1": [
   "Imperativ «Lasst uns …»"
  ]
 }
];

const REIHENFOLGE = [
 "1",
 "2",
 "3",
 "4",
 "5",
 "5b",
 "6",
 "7",
 "8",
 "9",
 "9b",
 "10",
 "11",
 "12"
];

const TYPEN = [
 {
  "id": "T1",
  "ru": "Обязаловка / свободное время",
  "signal": "verpflichtend, teilnehmen müssen, außerhalb der Arbeitszeit, samstags, am Wochenende, in der Freizeit, immer erreichbar",
  "grund": "freizeit",
  "zusatz": "z_t1",
  "form": "A"
 },
 {
  "id": "T2",
  "ru": "Платят сотрудники",
  "signal": "selbst bezahlen, privat übernehmen, Eigenbeteiligung, Gebühren, Beitrag, Kosten tragen, kein Urlaubsgeld mehr",
  "grund": "belastung",
  "zusatz": "z_t2",
  "form": "A"
 },
 {
  "id": "T3",
  "ru": "Урезают / запрещают / контроль",
  "signal": "nur noch, nicht mehr, verkürzen, abschaffen, entfernen, Verbot, bestrafen, nicht erlaubt",
  "grund": "passt",
  "zusatz": "z_t3",
  "form": "A"
 },
 {
  "id": "T4",
  "ru": "Выбор A или B / X вместо Y",
  "signal": "entweder … oder, oder, statt, Wahl",
  "grund": "pro1",
  "zusatz": "",
  "form": "B"
 },
 {
  "id": "T5",
  "ru": "Фирма что-то даёт",
  "signal": "Firma übernimmt die Kosten, anschaffen, einrichten, Bonus, kostenlos, zur Verfügung stellen",
  "grund": "kosten",
  "zusatz": "z_t5",
  "form": "A"
 },
 {
  "id": "T6",
  "ru": "Перестройка работы",
  "signal": "Großraumbüro, online, Homeoffice, Drucker pro Etage, duzen, Musik, mehr Praktikanten, neue Regeln",
  "grund": "passt",
  "zusatz": "z_t6",
  "form": "A"
 }
];

const FORMEN = [
 {
  "id": "A",
  "titel": "А · Я против",
  "ru": "T1, T2, T3, T5, T6 — почти все темы",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "5b",
   "6",
   "7",
   "8",
   "9",
   "9b",
   "10",
   "11",
   "12"
  ]
 },
 {
  "id": "B",
  "titel": "Б · Я выбираю (зеркальная форма — ВЫБОР)",
  "ru": "T4 — entweder … oder / statt",
  "bloecke": [
   "1",
   "2",
   "3",
   "4",
   "5",
   "5b",
   "6",
   "7",
   "8",
   "9",
   "10",
   "11",
   "12"
  ]
 }
];

const CHECKLISTE = [
 {
  "de": "Beide Themen lesen",
  "ru": "Прочитать ОБЕ темы. Незнакомые слова — подчеркнуть."
 },
 {
  "de": "Thema wählen",
  "ru": "Брать тему, которую понял на 100 %. Лучше всего ложатся: обязаловка, платим мы, запреты, перестройка работы. Проблема без меры (кражи, жара) — не брать."
 },
 {
  "de": "Schalter-Wörter suchen",
  "ru": "Обвести переключатели: nur noch · nicht mehr · statt · außer · pro / je · jeweils · ab · erst · kaum · ausschließlich · entweder … oder."
 },
 {
  "de": "Was ändert sich?",
  "ru": "Что меняется → ГОЛОВА (обязанность / расходы / ограничения / предложение / перестройка / выбор / джокер «планы») + одно слово-предмет для «in Sachen»."
 },
 {
  "de": "Was verschwindet?",
  "ru": "Что исчезнет или что это значит для нас → второе предложение (хвост А–Д или джокер)."
 },
 {
  "de": "Typ bestimmen",
  "ru": "Тип T1–T6 → довод 1. Кто платит? Фирма → «дорого», никто → «подходит не каждому»."
 },
 {
  "de": "Wörter aus der Aufgabe",
  "ru": "Выписать 4–6 существительных: одно — в первое предложение, остальные — в пример (блок 8) и в рамку-список после довода 1."
 },
 {
  "de": "Vor der Abgabe",
  "ru": "Проверка: первое предложение — не перепечатка? второе предложение? позиция → довод + слова темы → довод 2 → пример → плюс → возврат к тезису? абзацы? подпись?"
 }
];

const PAKETE = [
 {
  "id": "G1",
  "ru": "Деньги",
  "de": "Geld & Kosten",
  "woerter": [
   {
    "de": "die finanzielle Belastung",
    "ru": "финансовая нагрузка"
   },
   {
    "de": "die Kosten tragen",
    "ru": "нести расходы"
   },
   {
    "de": "das Budget",
    "ru": "бюджет"
   },
   {
    "de": "die Einsparung / Kosten sparen",
    "ru": "экономия / экономить"
   },
   {
    "de": "sich etwas leisten können",
    "ru": "мочь себе что-то позволить"
   },
   {
    "de": "kostspielig",
    "ru": "дорогостоящий"
   },
   {
    "de": "das Einkommen",
    "ru": "доход"
   },
   {
    "de": "auf eigene Kosten",
    "ru": "за свой счёт"
   }
  ],
  "synonyme": [
   {
    "aus": "bezahlen",
    "zu": "die Kosten tragen / übernehmen",
    "ru": "платить → нести расходы"
   },
   {
    "aus": "die Gebühr",
    "zu": "das Entgelt",
    "ru": "плата → вознаграждение, плата (официально)"
   },
   {
    "aus": "der Lohn / das Gehalt",
    "zu": "die Vergütung",
    "ru": "зарплата → вознаграждение за труд"
   },
   {
    "aus": "kostenlos",
    "zu": "unentgeltlich",
    "ru": "бесплатно → безвозмездно"
   }
  ]
 },
 {
  "id": "G2",
  "ru": "Время",
  "de": "Arbeitszeit & Freizeit",
  "woerter": [
   {
    "de": "das Privatleben",
    "ru": "личная жизнь"
   },
   {
    "de": "das Gleichgewicht zwischen Beruf und Privatleben",
    "ru": "баланс работы и личной жизни"
   },
   {
    "de": "die Erholung / sich erholen",
    "ru": "отдых / отдыхать"
   },
   {
    "de": "die Arbeitsbelastung",
    "ru": "рабочая нагрузка"
   },
   {
    "de": "erschöpft",
    "ru": "измотанный"
   },
   {
    "de": "flexibel einteilen",
    "ru": "гибко распределять"
   },
   {
    "de": "die Familie",
    "ru": "семья"
   },
   {
    "de": "der Feierabend",
    "ru": "конец рабочего дня"
   }
  ],
  "synonyme": [
   {
    "aus": "Überstunden",
    "zu": "die Mehrarbeit",
    "ru": "сверхурочные → переработка"
   },
   {
    "aus": "außerhalb der Arbeitszeit",
    "zu": "in der Freizeit",
    "ru": "вне рабочего времени → в свободное время"
   },
   {
    "aus": "am Samstag arbeiten",
    "zu": "die Wochenendarbeit",
    "ru": "работать в субботу → работа в выходные"
   },
   {
    "aus": "die Pause",
    "zu": "die Erholungsphase",
    "ru": "перерыв → время на восстановление"
   }
  ]
 },
 {
  "id": "G3",
  "ru": "Здоровье",
  "de": "Gesundheit & Wohlbefinden",
  "woerter": [
   {
    "de": "das Wohlbefinden",
    "ru": "самочувствие"
   },
   {
    "de": "die Gesundheit fördern",
    "ru": "укреплять здоровье"
   },
   {
    "de": "der Stress / stressig",
    "ru": "стресс / напряжённый"
   },
   {
    "de": "die Konzentration",
    "ru": "концентрация"
   },
   {
    "de": "die Leistungsfähigkeit",
    "ru": "работоспособность"
   },
   {
    "de": "die Bewegung",
    "ru": "движение, физическая активность"
   },
   {
    "de": "sich ausgewogen ernähren",
    "ru": "сбалансированно питаться"
   },
   {
    "de": "belastend",
    "ru": "тягостный, вредный"
   }
  ],
  "synonyme": [
   {
    "aus": "gesund",
    "zu": "gesundheitsfördernd",
    "ru": "здоровый → полезный для здоровья"
   },
   {
    "aus": "Sport",
    "zu": "körperliche Aktivität",
    "ru": "спорт → физическая активность"
   },
   {
    "aus": "krank sein",
    "zu": "krankheitsbedingt ausfallen",
    "ru": "болеть → выбывать по болезни"
   },
   {
    "aus": "Obst",
    "zu": "frische Lebensmittel",
    "ru": "фрукты → свежие продукты"
   }
  ]
 },
 {
  "id": "G4",
  "ru": "Экология",
  "de": "Umwelt & Nachhaltigkeit",
  "woerter": [
   {
    "de": "die Umwelt schonen",
    "ru": "беречь окружающую среду"
   },
   {
    "de": "nachhaltig",
    "ru": "экологичный, устойчивый"
   },
   {
    "de": "der Energieverbrauch",
    "ru": "потребление энергии"
   },
   {
    "de": "Ressourcen sparen",
    "ru": "экономить ресурсы"
   },
   {
    "de": "umweltfreundlich",
    "ru": "экологичный"
   },
   {
    "de": "das Umweltbewusstsein",
    "ru": "экологическое сознание"
   },
   {
    "de": "der Abfall vermeiden",
    "ru": "избегать отходов"
   },
   {
    "de": "öffentliche Verkehrsmittel",
    "ru": "общественный транспорт"
   }
  ],
  "synonyme": [
   {
    "aus": "Müll",
    "zu": "der Abfall",
    "ru": "мусор → отходы"
   },
   {
    "aus": "Energie sparen",
    "zu": "den Energieverbrauch senken",
    "ru": "экономить энергию → снижать энергопотребление"
   },
   {
    "aus": "weniger heizen",
    "zu": "die Heiztemperatur senken",
    "ru": "меньше топить → снизить температуру отопления"
   },
   {
    "aus": "das Fahrrad",
    "zu": "ein umweltfreundliches Verkehrsmittel",
    "ru": "велосипед → экологичный транспорт"
   }
  ]
 },
 {
  "id": "G5",
  "ru": "Коллектив",
  "de": "Team & Betriebsklima",
  "woerter": [
   {
    "de": "der Zusammenhalt",
    "ru": "сплочённость"
   },
   {
    "de": "das Betriebsklima",
    "ru": "атмосфера на работе"
   },
   {
    "de": "die Zusammenarbeit",
    "ru": "сотрудничество"
   },
   {
    "de": "die Wertschätzung",
    "ru": "уважение, признание"
   },
   {
    "de": "die Motivation",
    "ru": "мотивация"
   },
   {
    "de": "sich wohlfühlen",
    "ru": "чувствовать себя комфортно"
   },
   {
    "de": "der Konflikt",
    "ru": "конфликт"
   },
   {
    "de": "das Miteinander",
    "ru": "общение, совместная жизнь"
   }
  ],
  "synonyme": [
   {
    "aus": "das Team",
    "zu": "die Belegschaft / das Kollegium",
    "ru": "команда → коллектив"
   },
   {
    "aus": "zusammen essen",
    "zu": "die gemeinsame Mahlzeit",
    "ru": "есть вместе → совместная трапеза"
   },
   {
    "aus": "die Party",
    "zu": "die Feier",
    "ru": "вечеринка → праздник"
   },
   {
    "aus": "duzen",
    "zu": "der informelle Umgang",
    "ru": "на «ты» → неформальное общение"
   }
  ]
 },
 {
  "id": "G6",
  "ru": "Рабочее место, техника",
  "de": "Arbeitsplatz & Technik",
  "woerter": [
   {
    "de": "die Ausstattung",
    "ru": "оснащение"
   },
   {
    "de": "die Arbeitsabläufe (Pl.)",
    "ru": "рабочие процессы"
   },
   {
    "de": "die Effizienz",
    "ru": "эффективность"
   },
   {
    "de": "die Ablenkung",
    "ru": "отвлечение"
   },
   {
    "de": "der Lärmpegel",
    "ru": "уровень шума"
   },
   {
    "de": "die Privatsphäre",
    "ru": "личное пространство"
   },
   {
    "de": "die Digitalisierung",
    "ru": "цифровизация"
   },
   {
    "de": "die Erreichbarkeit",
    "ru": "доступность, быть на связи"
   }
  ],
  "synonyme": [
   {
    "aus": "das Großraumbüro",
    "zu": "die offene Bürofläche",
    "ru": "опен-спейс → открытое офисное пространство"
   },
   {
    "aus": "das Handy",
    "zu": "das Mobiltelefon",
    "ru": "телефон → мобильный телефон"
   },
   {
    "aus": "das Homeoffice",
    "zu": "das mobile Arbeiten",
    "ru": "удалёнка → мобильная работа"
   },
   {
    "aus": "das Meeting online",
    "zu": "die virtuelle Besprechung",
    "ru": "онлайн-встреча → виртуальное совещание"
   }
  ]
 },
 {
  "id": "G7",
  "ru": "Персонал, обучение",
  "de": "Personal & Weiterbildung",
  "woerter": [
   {
    "de": "die Weiterbildung",
    "ru": "повышение квалификации"
   },
   {
    "de": "die Kompetenzen erweitern",
    "ru": "расширять компетенции"
   },
   {
    "de": "die Qualifikation",
    "ru": "квалификация"
   },
   {
    "de": "die Einarbeitung",
    "ru": "введение в должность"
   },
   {
    "de": "die Fachkraft",
    "ru": "специалист"
   },
   {
    "de": "der Fachkräftemangel",
    "ru": "нехватка специалистов"
   },
   {
    "de": "beruflich weiterkommen",
    "ru": "продвигаться по работе"
   },
   {
    "de": "die Betreuung",
    "ru": "опека, сопровождение"
   }
  ],
  "synonyme": [
   {
    "aus": "der Kurs",
    "zu": "die Schulung / die Fortbildung",
    "ru": "курс → обучение, повышение квалификации"
   },
   {
    "aus": "der Praktikant",
    "zu": "die Nachwuchskraft",
    "ru": "стажёр → молодой специалист"
   },
   {
    "aus": "lernen",
    "zu": "sich weiterbilden",
    "ru": "учиться → повышать квалификацию"
   },
   {
    "aus": "der Workshop",
    "zu": "das Seminar",
    "ru": "воркшоп → семинар"
   }
  ]
 },
 {
  "id": "G8",
  "ru": "Правила, безопасность",
  "de": "Regeln & Sicherheit",
  "woerter": [
   {
    "de": "die Vorschriften einhalten",
    "ru": "соблюдать предписания"
   },
   {
    "de": "die Kontrolle",
    "ru": "контроль"
   },
   {
    "de": "das Vertrauen",
    "ru": "доверие"
   },
   {
    "de": "die Eigenverantwortung",
    "ru": "собственная ответственность"
   },
   {
    "de": "die Sicherheit am Arbeitsplatz",
    "ru": "безопасность на рабочем месте"
   },
   {
    "de": "verbindlich",
    "ru": "обязательный (к исполнению)"
   },
   {
    "de": "die Konsequenzen (Pl.)",
    "ru": "последствия"
   },
   {
    "de": "die Angst vor Fehlern",
    "ru": "страх ошибок"
   }
  ],
  "synonyme": [
   {
    "aus": "verbieten",
    "zu": "untersagen",
    "ru": "запрещать → не допускать (официально)"
   },
   {
    "aus": "die Regel",
    "zu": "die Vorgabe",
    "ru": "правило → требование"
   },
   {
    "aus": "bestrafen",
    "zu": "sanktionieren",
    "ru": "наказывать → применять санкции"
   },
   {
    "aus": "die Strafe",
    "zu": "die Sanktion",
    "ru": "наказание → санкция"
   }
  ]
 },
 {
  "id": "G9",
  "ru": "Еда и перерывы",
  "de": "Essen & Pausen",
  "woerter": [
   {
    "de": "die Ernährung",
    "ru": "питание"
   },
   {
    "de": "die Verpflegung",
    "ru": "питание (на работе), довольствие"
   },
   {
    "de": "die Mahlzeit",
    "ru": "приём пищи"
   },
   {
    "de": "das Angebot",
    "ru": "предложение, ассортимент"
   },
   {
    "de": "die Auswahl",
    "ru": "выбор"
   },
   {
    "de": "die Essgewohnheiten (Pl.)",
    "ru": "пищевые привычки"
   },
   {
    "de": "der Pausenraum",
    "ru": "комната отдыха"
   },
   {
    "de": "sich versorgen",
    "ru": "обеспечивать себя (едой)"
   }
  ],
  "synonyme": [
   {
    "aus": "das Essen",
    "zu": "die Verpflegung",
    "ru": "еда → питание"
   },
   {
    "aus": "die Kantine",
    "zu": "das Betriebsrestaurant",
    "ru": "столовая → ресторан предприятия"
   },
   {
    "aus": "vegetarisch",
    "zu": "fleischlos",
    "ru": "вегетарианский → без мяса"
   },
   {
    "aus": "Süßigkeiten",
    "zu": "süße Snacks",
    "ru": "сладости → сладкие перекусы"
   }
  ]
 }
];

const THEMEN = [
 {
  "n": 1,
  "titel": "Kleiderordnung",
  "typ": "T2",
  "g": "G1",
  "aufgabe": "Alle Mitarbeiter in Ihrer Firma sollen einheitliche Kleidung tragen. Die Reinigungskosten soll aber jeder privat übernehmen.",
  "aufgabeRu": "Все сотрудники вашей фирмы должны носить одинаковую одежду. Однако расходы на чистку каждый оплачивает сам.",
  "folge": {
   "de": "jeder von uns die Reinigung seiner Dienstkleidung selbst bezahlen müsste",
   "ru": "каждому из нас пришлось бы самому оплачивать чистку рабочей одежды"
  },
  "grund": "belastung",
  "plus": "arbeitgeber",
  "kopf": "die neuen Kosten — новые расходы",
  "thema": {
   "de": "die neuen Kosten in Sachen Arbeitskleidung",
   "ru": "о новых расходах насчёт рабочей одежды"
  },
  "exakt": {
   "de": "die neue Kleiderordnung",
   "ru": "новый дресс-код"
  },
  "inhalt": {
   "de": "Die Reinigung müssten wir aus eigener Tasche bezahlen.",
   "ru": "Чистку нам пришлось бы платить из своего кармана."
  }
 },
 {
  "n": 2,
  "titel": "Samstagsarbeit",
  "typ": "T1",
  "g": "G2",
  "aufgabe": "Alle Mitarbeiter in Ihrer Firma sollen in Zukunft auch samstags arbeiten. Es gibt keinen Zuschlag.",
  "aufgabeRu": "Все сотрудники вашей фирмы в будущем должны работать и по субботам. Доплаты нет.",
  "folge": {
   "de": "viele Kollegen ihre Wochenenden nicht mehr mit der Familie verbringen könnten",
   "ru": "многие коллеги больше не смогли бы проводить выходные с семьёй"
  },
  "grund": "freizeit",
  "plus": "effizienz",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Wochenendarbeit",
   "ru": "о новой обязанности насчёт работы в выходные"
  },
  "exakt": {
   "de": "die geplante Samstagsarbeit",
   "ru": "планируемая работа по субботам"
  },
  "inhalt": {
   "de": "Freie Samstage soll es dann nicht mehr geben.",
   "ru": "Свободных суббот тогда больше не будет."
  }
 },
 {
  "n": 3,
  "titel": "Zeitmanagement",
  "typ": "T1",
  "g": "G7",
  "aufgabe": "Alle Mitarbeiter sollen an einem Workshop für Zeitmanagement teilnehmen.",
  "aufgabeRu": "Все сотрудники должны принять участие в семинаре по тайм-менеджменту.",
  "folge": {
   "de": "wir während des Seminars unsere laufenden Projekte unterbrechen müssten",
   "ru": "нам пришлось бы на время семинара прервать текущие проекты"
  },
  "grund": "kosten",
  "plus": "kompetenz",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Zeitmanagement",
   "ru": "о новой обязанности насчёт тайм-менеджмента"
  },
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht.",
   "ru": "Участие тогда было бы обязательным для всех."
  }
 },
 {
  "n": 4,
  "titel": "Firmenparkplatz gebührenpflichtig",
  "typ": "T2",
  "g": "G1",
  "aufgabe": "Die Mitarbeiter sollen in Zukunft für das Parken auf dem Firmenparkplatz Gebühren zahlen.",
  "aufgabeRu": "В будущем сотрудники должны платить за парковку на парковке фирмы.",
  "folge": {
   "de": "Kollegen, die auf das Auto angewiesen sind, jeden Monat zusätzlich Geld ausgeben müssten",
   "ru": "коллегам, которые зависят от машины, пришлось бы каждый месяц тратить дополнительные деньги"
  },
  "grund": "belastung",
  "plus": "umwelt",
  "kopf": "die neuen Kosten — новые расходы",
  "thema": {
   "de": "die neuen Kosten in Sachen Parkplatz",
   "ru": "о новых расходах насчёт парковки"
  },
  "exakt": {
   "de": "die neuen Parkgebühren",
   "ru": "новые сборы за парковку"
  },
  "inhalt": {
   "de": "Kostenlose Parkplätze soll es dann nicht mehr geben.",
   "ru": "Бесплатных мест тогда больше не будет."
  }
 },
 {
  "n": 5,
  "titel": "Rückenfreundliche Bürostühle",
  "typ": "T2",
  "g": "G3",
  "aufgabe": "Für alle Mitarbeiter sollen rückenfreundliche Bürostühle angeschafft werden. Die Hälfte der Kosten sollen sie selbst bezahlen.",
  "aufgabeRu": "Для всех сотрудников закупят стулья, полезные для спины. Половину стоимости они должны оплатить сами.",
  "folge": {
   "de": "jeder von uns einen großen Teil der Anschaffungskosten aus eigener Tasche bezahlen müsste",
   "ru": "каждому из нас пришлось бы платить из своего кармана большую часть стоимости"
  },
  "grund": "belastung",
  "plus": "gesund",
  "kopf": "die neuen Kosten — новые расходы",
  "thema": {
   "de": "die neuen Kosten in Sachen Büroausstattung",
   "ru": "о новых расходах насчёт оснащения офиса"
  },
  "inhalt": {
   "de": "Die Hälfte müssten wir aus eigener Tasche bezahlen.",
   "ru": "Половину нам пришлось бы платить из своего кармана."
  }
 },
 {
  "n": 6,
  "titel": "Jobticket oder Firmenfahrrad",
  "typ": "T4",
  "g": "G4",
  "aufgabe": "Ihr Arbeitgeber möchte allen Mitarbeitern entweder ein Firmenfahrrad oder monatlich einen 50-Euro-Zuschuss zum Jobticket geben.",
  "aufgabeRu": "Работодатель хочет дать всем сотрудникам либо служебный велосипед, либо ежемесячную доплату 50 евро к проездному.",
  "folge": {
   "de": "auch Kollegen mit einem langen Arbeitsweg bei jedem Wetter bequem zur Arbeit kommen könnten",
   "ru": "и коллеги с долгой дорогой могли бы в любую погоду удобно добираться до работы"
  },
  "grund": "pro2",
  "plus": "gesund",
  "wahlA": {
   "de": "den Zuschuss zum Jobticket",
   "ru": "доплату к проездному"
  },
  "wahlB": {
   "de": "das Firmenfahrrad",
   "ru": "служебный велосипед"
  },
  "kopf": "die beiden Vorschläge — оба предложения",
  "thema": {
   "de": "die beiden Vorschläge in Sachen Arbeitsweg",
   "ru": "об обоих предложениях насчёт дороги на работу"
  },
  "inhalt": {
   "de": "Beides zusammen soll es leider nicht geben.",
   "ru": "И то и другое вместе, к сожалению, не дадут."
  }
 },
 {
  "n": 7,
  "titel": "Computerkurs außerhalb der Arbeitszeit",
  "typ": "T1",
  "g": "G7",
  "aufgabe": "Alle Mitarbeiter sollen einen verpflichtenden Computerkurs außerhalb der Arbeitszeit besuchen. Die Firma übernimmt die Kosten.",
  "aufgabeRu": "Все сотрудники должны пройти обязательный компьютерный курс вне рабочего времени. Расходы берёт на себя фирма.",
  "folge": {
   "de": "viele Kollegen nach Feierabend noch zusätzlich lernen müssten",
   "ru": "многим коллегам пришлось бы после работы ещё и учиться"
  },
  "grund": "freizeit",
  "plus": "kompetenz",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Weiterbildung",
   "ru": "о новой обязанности насчёт обучения"
  },
  "exakt": {
   "de": "die neue Pflichtschulung",
   "ru": "новое обязательное обучение"
  },
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  }
 },
 {
  "n": 8,
  "titel": "Alle duzen",
  "typ": "T6",
  "g": "G5",
  "aufgabe": "Für ein besseres Betriebsklima sollen sich zukünftig alle duzen – auch Vorgesetzte und Kunden.",
  "aufgabeRu": "Для лучшей атмосферы в будущем все должны обращаться друг к другу на «ты» — в том числе к начальству и клиентам.",
  "folge": {
   "de": "wir auch langjährige Kunden plötzlich duzen müssten, was unprofessionell wirken könnte",
   "ru": "нам пришлось бы вдруг говорить «ты» давним клиентам, что могло бы выглядеть непрофессионально"
  },
  "grund": "passt",
  "plus": "team",
  "kopf": "die geplante Umstellung — планируемая перестройка",
  "thema": {
   "de": "die geplante Umstellung in Sachen Anrede",
   "ru": "о планируемой перестройке насчёт обращения"
  },
  "exakt": {
   "de": "die neue Du-Kultur",
   "ru": "новая культура «на ты»"
  },
  "inhalt": {
   "de": "Das förmliche „Sie“ soll es dann nicht mehr geben.",
   "ru": "Официального «Вы» тогда больше не будет."
  }
 },
 {
  "n": 9,
  "titel": "Verpflichtende Teamsitzungen ★",
  "typ": "T1",
  "g": "G5",
  "aufgabe": "Alle Mitarbeiter sollen verpflichtet werden, an regelmäßigen Teamsitzungen teilzunehmen, auch wenn diese außerhalb ihrer Arbeitszeit stattfinden.",
  "aufgabeRu": "Всех сотрудников обяжут участвовать в регулярных собраниях команды, даже если они проходят вне рабочего времени.",
  "folge": {
   "de": "viele Kollegen ihre Abende nicht mehr frei planen könnten",
   "ru": "многие коллеги больше не могли бы свободно планировать вечера"
  },
  "grund": "freizeit",
  "plus": "team",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Besprechungen",
   "ru": "о новой обязанности насчёт совещаний"
  },
  "exakt": {
   "de": "die neue Anwesenheitspflicht",
   "ru": "новая обязанность присутствовать"
  },
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  }
 },
 {
  "n": 10,
  "titel": "Firmenhandy für alle ★",
  "typ": "T1",
  "g": "G6",
  "aufgabe": "Alle Mitarbeiter sollen ein Firmenhandy bekommen, damit sie immer erreichbar sind – auch am Abend und an den Wochenenden.",
  "aufgabeRu": "Все сотрудники получат служебный телефон, чтобы всегда быть на связи — и вечером, и в выходные.",
  "folge": {
   "de": "wir auch abends und am Wochenende jederzeit mit Anrufen rechnen müssten",
   "ru": "нам пришлось бы и вечером, и в выходные в любой момент ждать звонков"
  },
  "grund": "freizeit",
  "plus": "effizienz",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Erreichbarkeit",
   "ru": "о новой обязанности насчёт «быть на связи»"
  },
  "exakt": {
   "de": "die ständige Erreichbarkeit",
   "ru": "постоянное «быть на связи»"
  },
  "inhalt": {
   "de": "Wirklich freie Abende soll es dann nicht mehr geben.",
   "ru": "По-настоящему свободных вечеров тогда больше не будет."
  }
 },
 {
  "n": 11,
  "titel": "Weniger Müll im Betrieb",
  "typ": "T3",
  "g": "G4",
  "aufgabe": "Die Mitarbeiter sollen Verpackungsmüll sparen. Es gibt neue Kühlschränke und Mikrowellen. Alle Snackautomaten sollen entfernt werden.",
  "aufgabeRu": "Сотрудники должны производить меньше упаковочного мусора. Есть новые холодильники и микроволновки. Все автоматы со снеками уберут.",
  "folge": {
   "de": "Kollegen ohne Zeit zum Kochen kaum noch eine schnelle Möglichkeit hätten, sich zu versorgen",
   "ru": "у коллег без времени на готовку почти не осталось бы возможности быстро перекусить"
  },
  "grund": "passt",
  "plus": "umwelt",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Snacks",
   "ru": "о новых ограничениях насчёт перекусов"
  },
  "inhalt": {
   "de": "Snackautomaten soll es dann nicht mehr geben.",
   "ru": "Автоматов со снеками тогда больше не будет."
  }
 },
 {
  "n": 12,
  "titel": "Mehr Lohn oder Urlaubstage",
  "typ": "T4",
  "g": "G1",
  "aufgabe": "Für mehr Zufriedenheit soll es entweder etwas mehr Lohn oder zwei zusätzliche Urlaubstage für alle geben.",
  "aufgabeRu": "Для большей удовлетворённости всем дадут либо немного больше зарплаты, либо два дополнительных дня отпуска.",
  "folge": {
   "de": "sich alle Kollegen nach den stressigen Projekten besser erholen könnten",
   "ru": "все коллеги лучше отдыхали бы после напряжённых проектов"
  },
  "grund": "pro1",
  "plus": "entlastung",
  "wahlA": {
   "de": "die zusätzlichen Urlaubstage",
   "ru": "дополнительные дни отпуска"
  },
  "wahlB": {
   "de": "die Gehaltserhöhung",
   "ru": "повышение зарплаты"
  },
  "kopf": "die beiden Vorschläge — оба предложения",
  "thema": {
   "de": "die beiden Vorschläge in Sachen Lohn und Urlaub",
   "ru": "об обоих предложениях насчёт зарплаты и отпуска"
  },
  "inhalt": {
   "de": "Beides zusammen soll es leider nicht geben.",
   "ru": "И то и другое вместе, к сожалению, не дадут."
  }
 },
 {
  "n": 13,
  "titel": "Ein großer Drucker pro Etage",
  "typ": "T6",
  "g": "G6",
  "aufgabe": "Alle Drucker in den Büros sollen abgeschafft werden, stattdessen soll es pro Etage einen großen Drucker auf dem Flur geben.",
  "aufgabeRu": "Все принтеры в кабинетах уберут, вместо этого на каждом этаже в коридоре будет один большой принтер.",
  "folge": {
   "de": "wir für jeden Ausdruck unseren Arbeitsplatz verlassen müssten",
   "ru": "нам пришлось бы ради каждой распечатки уходить с рабочего места"
  },
  "grund": "passt",
  "plus": "sparen",
  "kopf": "die geplante Umstellung — планируемая перестройка",
  "thema": {
   "de": "die geplante Umstellung in Sachen Drucker",
   "ru": "о планируемой перестройке насчёт принтеров"
  },
  "inhalt": {
   "de": "Eigene Drucker im Büro soll es dann nicht mehr geben.",
   "ru": "Своих принтеров в кабинете тогда больше не будет."
  }
 },
 {
  "n": 14,
  "titel": "Freizeitausgleich statt Bezahlung",
  "typ": "T3",
  "g": "G2",
  "aufgabe": "Überstunden können ab sofort nur noch als Freizeit ausgeglichen werden. Die Auszahlung ist nicht mehr erlaubt.",
  "aufgabeRu": "Сверхурочные с этого момента можно компенсировать только отгулами. Выплата больше не разрешена.",
  "folge": {
   "de": "Kollegen, die auf das zusätzliche Geld angewiesen sind, spürbare finanzielle Einbußen hätten",
   "ru": "коллеги, которые зависят от дополнительных денег, ощутимо потеряли бы в доходе"
  },
  "grund": "passt",
  "plus": "erholung",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Überstunden",
   "ru": "о новых ограничениях насчёт сверхурочных"
  },
  "exakt": {
   "de": "die neue Überstundenregelung",
   "ru": "новое правило о сверхурочных"
  },
  "inhalt": {
   "de": "Geld für Überstunden soll es dann nicht mehr geben.",
   "ru": "Денег за сверхурочные тогда больше не будет."
  }
 },
 {
  "n": 15,
  "titel": "Energie sparen",
  "typ": "T3",
  "g": "G4",
  "aufgabe": "Es soll nicht mehr so viel geheizt werden. Wenn es kalt ist, können die Mitarbeiter in Winterkleidung arbeiten.",
  "aufgabeRu": "Будут меньше топить. Если холодно, сотрудники могут работать в зимней одежде.",
  "folge": {
   "de": "wir bei niedrigen Temperaturen kaum konzentriert arbeiten könnten",
   "ru": "при низкой температуре мы вряд ли могли бы работать сосредоточенно"
  },
  "grund": "passt",
  "plus": "umwelt",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Heizung",
   "ru": "о новых ограничениях насчёт отопления"
  },
  "exakt": {
   "de": "die geplanten Energiesparmaßnahmen",
   "ru": "планируемые меры экономии энергии"
  },
  "inhalt": {
   "de": "Warme Büros soll es dann nicht mehr geben.",
   "ru": "Тёплых кабинетов тогда больше не будет."
  }
 },
 {
  "n": 16,
  "titel": "Vegetarische Küche",
  "typ": "T3",
  "g": "G9",
  "aufgabe": "In der Betriebskantine soll nur noch vegetarisches Essen angeboten werden. Wer Fleisch essen möchte, muss es von zu Hause mitbringen.",
  "aufgabeRu": "В столовой будут предлагать только вегетарианскую еду. Кто хочет мяса — приносит еду из дома.",
  "folge": {
   "de": "alle, die Fleisch essen möchten, ihr Essen künftig von zu Hause mitbringen müssten",
   "ru": "всем, кто хочет есть мясо, впредь пришлось бы приносить еду из дома"
  },
  "grund": "passt",
  "plus": "gesund",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Kantinenessen",
   "ru": "о новых ограничениях насчёт еды в столовой"
  },
  "exakt": {
   "de": "die fleischlose Kantine",
   "ru": "столовая без мяса"
  },
  "inhalt": {
   "de": "Fleischgerichte soll es dann nicht mehr geben.",
   "ru": "Мясных блюд тогда больше не будет."
  }
 },
 {
  "n": 17,
  "titel": "Gemeinsames Mittagessen",
  "typ": "T2",
  "g": "G5",
  "aufgabe": "Jeden Freitag soll das Mittagessen von einem Cateringservice geliefert werden. Die Kosten sollen die Angestellten tragen.",
  "aufgabeRu": "Каждую пятницу обед будет доставлять кейтеринговая служба. Расходы несут сотрудники.",
  "folge": {
   "de": "jeder von uns jeden Freitag für ein Essen zahlen müsste, das er sich nicht selbst ausgesucht hat",
   "ru": "каждому пришлось бы по пятницам платить за еду, которую он сам не выбирал"
  },
  "grund": "belastung",
  "plus": "team",
  "kopf": "die neuen Kosten — новые расходы",
  "thema": {
   "de": "die neuen Kosten in Sachen Mittagessen",
   "ru": "о новых расходах насчёт обеда"
  },
  "inhalt": {
   "de": "Das Essen müssten wir aus eigener Tasche bezahlen.",
   "ru": "Еду нам пришлось бы платить из своего кармана."
  }
 },
 {
  "n": 18,
  "titel": "Obst statt Süßigkeiten",
  "typ": "T3",
  "g": "G3",
  "aufgabe": "Im Pausenraum soll es keine Süßigkeiten mehr geben. Stattdessen gibt es frisches Obst.",
  "aufgabeRu": "В комнате отдыха больше не будет сладостей. Вместо них — свежие фрукты.",
  "folge": {
   "de": "Kollegen ihre kleinen Belohnungen im Arbeitsalltag künftig selbst kaufen müssten",
   "ru": "коллегам впредь пришлось бы самим покупать свои маленькие радости в течение дня"
  },
  "grund": "passt",
  "plus": "gesund",
  "kopf": "die geplante Umstellung — планируемая перестройка",
  "thema": {
   "de": "die geplante Umstellung in Sachen Pausensnacks",
   "ru": "о планируемой перестройке насчёт перекусов в перерыв"
  },
  "inhalt": {
   "de": "Schokolade und Kekse soll es dann nicht mehr geben.",
   "ru": "Шоколада и печенья тогда больше не будет."
  }
 },
 {
  "n": 19,
  "titel": "Betriebskindergarten",
  "typ": "T5",
  "g": "G7",
  "aufgabe": "Ab September soll ein Betriebskindergarten mit 25 Plätzen eingeführt werden.",
  "aufgabeRu": "С сентября откроют корпоративный детский сад на 25 мест.",
  "folge": {
   "de": "ein großer Teil des Budgets nur den Kollegen mit kleinen Kindern zugutekäme",
   "ru": "значительная часть бюджета пошла бы на пользу только коллегам с маленькими детьми"
  },
  "grund": "kosten",
  "plus": "arbeitgeber",
  "kopf": "das neue Angebot — новое предложение",
  "thema": {
   "de": "das neue Angebot in Sachen Kinderbetreuung",
   "ru": "о новом предложении насчёт присмотра за детьми"
  },
  "exakt": {
   "de": "die geplante Betriebskita",
   "ru": "планируемый детсад фирмы"
  },
  "inhalt": {
   "de": "Geplant ist eine eigene Kita.",
   "ru": "Планируется свой детсад."
  }
 },
 {
  "n": 20,
  "titel": "Geburtstag des Geschäftsführers",
  "typ": "T2",
  "g": "G5",
  "aufgabe": "Für den Geburtstag des Geschäftsführers soll eine große Party organisiert werden. Jeder soll 50 Euro beitragen.",
  "aufgabeRu": "На день рождения директора устроят большую вечеринку. Каждый должен внести 50 евро.",
  "folge": {
   "de": "gerade Kollegen mit geringerem Einkommen sich unter Druck gesetzt fühlen könnten",
   "ru": "именно коллеги с меньшим доходом могли бы почувствовать давление"
  },
  "grund": "belastung",
  "plus": "team",
  "kopf": "die neuen Pläne — новые планы",
  "thema": {
   "de": "die neuen Pläne in Sachen Geburtstagsfeier",
   "ru": "о новых планах насчёт празднования дня рождения"
  },
  "inhalt": {
   "de": "Die Feier müssten wir aus eigener Tasche bezahlen.",
   "ru": "Праздник нам пришлось бы платить из своего кармана."
  }
 },
 {
  "n": 21,
  "titel": "Bonus ohne Krankheitstage",
  "typ": "T5",
  "g": "G3",
  "aufgabe": "Mitarbeiter, die im ganzen Jahr an keinem Tag krankheitsbedingt gefehlt haben, sollen einen Bonus bekommen.",
  "aufgabeRu": "Сотрудники, которые за весь год ни дня не пропустили по болезни, получат премию.",
  "folge": {
   "de": "manche Kollegen sogar krank zur Arbeit kommen würden, um den Bonus nicht zu verlieren",
   "ru": "некоторые коллеги приходили бы на работу даже больными, чтобы не потерять премию"
  },
  "grund": "druck",
  "plus": "arbeitgeber",
  "kopf": "die neuen Pläne — новые планы",
  "thema": {
   "de": "die neuen Pläne in Sachen Bonus",
   "ru": "о новых планах насчёт премии"
  },
  "exakt": {
   "de": "die neue Gesundheitsprämie",
   "ru": "новая премия за здоровье"
  },
  "inhalt": {
   "de": "Geplant ist eine Prämie für gesunde Mitarbeiter.",
   "ru": "Планируется премия для здоровых сотрудников."
  }
 },
 {
  "n": 22,
  "titel": "Kürzere Mittagspause",
  "typ": "T3",
  "g": "G9",
  "aufgabe": "Die Mittagspause soll statt einer Stunde nur noch 30 Minuten betragen. Dafür haben die Mitarbeiter früher Feierabend.",
  "aufgabeRu": "Обеденный перерыв будет длиться не час, а только 30 минут. Зато сотрудники раньше уходят домой.",
  "folge": {
   "de": "uns kaum noch Zeit bliebe, in Ruhe zu essen und uns zu erholen",
   "ru": "у нас почти не оставалось бы времени спокойно поесть и отдохнуть"
  },
  "grund": "passt",
  "plus": "erholung",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Mittagspause",
   "ru": "о новых ограничениях насчёт обеденного перерыва"
  },
  "exakt": {
   "de": "die verkürzte Mittagspause",
   "ru": "сокращённый обеденный перерыв"
  },
  "inhalt": {
   "de": "Lange Mittagspausen soll es dann nicht mehr geben.",
   "ru": "Длинных обеденных перерывов тогда больше не будет."
  }
 },
 {
  "n": 23,
  "titel": "Meetings online",
  "typ": "T6",
  "g": "G6",
  "aufgabe": "Um Zeit und Kosten zu sparen, sollen Meetings nur noch online stattfinden.",
  "aufgabeRu": "Чтобы сэкономить время и деньги, совещания будут проходить только онлайн.",
  "folge": {
   "de": "der persönliche Austausch mit den Kollegen fast vollständig verloren ginge",
   "ru": "живое общение с коллегами почти полностью исчезло бы"
  },
  "grund": "passt",
  "plus": "sparen",
  "kopf": "die geplante Umstellung — планируемая перестройка",
  "thema": {
   "de": "die geplante Umstellung in Sachen Besprechungen",
   "ru": "о планируемой перестройке насчёт совещаний"
  },
  "exakt": {
   "de": "die geplanten Online-Besprechungen",
   "ru": "планируемые онлайн-совещания"
  },
  "inhalt": {
   "de": "Persönliche Treffen soll es dann nicht mehr geben.",
   "ru": "Личных встреч тогда больше не будет."
  }
 },
 {
  "n": 24,
  "titel": "Mehr Praktikanten",
  "typ": "T6",
  "g": "G7",
  "aufgabe": "Da es viel zu tun gibt, sollen in Zukunft mehr Praktikanten eingestellt werden.",
  "aufgabeRu": "Так как работы много, в будущем будут нанимать больше стажёров.",
  "folge": {
   "de": "erfahrene Kollegen einen großen Teil ihrer Zeit mit der Einarbeitung verbringen müssten",
   "ru": "опытным коллегам пришлось бы тратить много времени на введение новичков в работу"
  },
  "grund": "mehraufwand",
  "plus": "kompetenz",
  "kopf": "die neuen Pläne — новые планы",
  "thema": {
   "de": "die neuen Pläne in Sachen Personal",
   "ru": "о новых планах насчёт персонала"
  },
  "inhalt": {
   "de": "Geplant sind zusätzliche Praktikumsstellen.",
   "ru": "Планируются дополнительные места для стажёров."
  }
 },
 {
  "n": 25,
  "titel": "Klassische Musik",
  "typ": "T6",
  "g": "G3",
  "aufgabe": "In allen Büros soll während der Arbeit klassische Musik gespielt werden, damit sich die Mitarbeiter wohler fühlen.",
  "aufgabeRu": "Во всех офисах во время работы будет играть классическая музыка, чтобы сотрудники чувствовали себя комфортнее.",
  "folge": {
   "de": "konzentriertes Arbeiten und Telefonate mit Kunden deutlich schwieriger würden",
   "ru": "сосредоточенная работа и звонки клиентам стали бы заметно сложнее"
  },
  "grund": "passt",
  "plus": "gesund",
  "kopf": "die neuen Pläne — новые планы",
  "thema": {
   "de": "die neuen Pläne in Sachen Musik am Arbeitsplatz",
   "ru": "о новых планах насчёт музыки на рабочем месте"
  },
  "inhalt": {
   "de": "Ruhige Büros soll es dann nicht mehr geben.",
   "ru": "Тихих кабинетов тогда больше не будет."
  }
 },
 {
  "n": 26,
  "titel": "Bürogestaltung: Großraumbüro ★",
  "typ": "T6",
  "g": "G6",
  "aufgabe": "In Ihrer Firma soll im Großraumbüro gearbeitet werden. Die Geschäftsführung meint, offene Räume sind gut für das Arbeitsklima.",
  "aufgabeRu": "В вашей фирме будут работать в опен-спейсе. Руководство считает, что открытые пространства хороши для атмосферы.",
  "folge": {
   "de": "der Lärmpegel steigen und die Privatsphäre am Arbeitsplatz verloren gehen würde",
   "ru": "вырос бы уровень шума и пропало бы личное пространство на рабочем месте"
  },
  "grund": "passt",
  "plus": "team",
  "kopf": "die geplante Umstellung — планируемая перестройка",
  "thema": {
   "de": "die geplante Umstellung in Sachen Büroräume",
   "ru": "о планируемой перестройке насчёт офисных помещений"
  },
  "exakt": {
   "de": "das geplante Großraumbüro",
   "ru": "планируемый опен-спейс"
  },
  "inhalt": {
   "de": "Einzelbüros soll es dann nicht mehr geben.",
   "ru": "Отдельных кабинетов тогда больше не будет."
  }
 },
 {
  "n": 27,
  "titel": "Mitarbeit im Firmengarten",
  "typ": "T1",
  "g": "G4",
  "aufgabe": "Die Mitarbeiter sollen in ihrer Freizeit beim Anlegen und Pflegen eines Firmengartens mithelfen.",
  "aufgabeRu": "Сотрудники должны в свободное время помогать обустраивать корпоративный сад и ухаживать за ним.",
  "folge": {
   "de": "wir nach Feierabend noch Beete anlegen und pflegen müssten",
   "ru": "нам пришлось бы после работы ещё сажать и пропалывать грядки"
  },
  "grund": "freizeit",
  "plus": "umwelt",
  "kopf": "die neue Pflicht — новая обязанность",
  "thema": {
   "de": "die neue Pflicht in Sachen Firmengarten",
   "ru": "о новой обязанности насчёт сада фирмы"
  },
  "inhalt": {
   "de": "Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.",
   "ru": "Участие тогда было бы обязательным для всех — причём после работы."
  }
 },
 {
  "n": 28,
  "titel": "Verstöße gegen die Sicherheitsvorschriften",
  "typ": "T3",
  "g": "G8",
  "aufgabe": "Es gab in letzter Zeit immer wieder Verstöße gegen die Sicherheitsvorschriften. Sie sollen in Zukunft streng bestraft werden.",
  "aufgabeRu": "В последнее время постоянно нарушают правила техники безопасности. В будущем за это будут строго наказывать.",
  "folge": {
   "de": "eine Atmosphäre der Angst entstehen würde, in der Fehler eher verschwiegen werden",
   "ru": "возникла бы атмосфера страха, в которой об ошибках скорее промолчат"
  },
  "grund": "druck",
  "plus": "sicher",
  "kopf": "die neuen Pläne — новые планы",
  "thema": {
   "de": "die neuen Pläne in Sachen Arbeitssicherheit",
   "ru": "о новых планах насчёт охраны труда"
  },
  "inhalt": {
   "de": "Ausnahmen soll es dann nicht mehr geben.",
   "ru": "Исключений тогда больше не будет."
  }
 },
 {
  "n": 29,
  "titel": "Betriebliche Kinderbetreuung ★",
  "typ": "T2",
  "g": "G1",
  "aufgabe": "Die Mitarbeiter sollen ab dem nächsten Jahr kein Urlaubsgeld mehr bekommen, um die Einrichtung einer betriebseigenen Kita zu finanzieren.",
  "aufgabeRu": "Со следующего года сотрудники больше не будут получать отпускные, чтобы профинансировать собственный детсад фирмы.",
  "folge": {
   "de": "alle Kollegen auf einen Teil ihres Einkommens verzichten müssten, obwohl nur wenige die Kita nutzen würden",
   "ru": "всем коллегам пришлось бы отказаться от части дохода, хотя детсадом пользовались бы немногие"
  },
  "grund": "belastung",
  "plus": "arbeitgeber",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Urlaubsgeld",
   "ru": "о новых ограничениях насчёт отпускных"
  },
  "inhalt": {
   "de": "Extra-Geld für den Urlaub soll es dann nicht mehr geben.",
   "ru": "Дополнительных денег к отпуску тогда больше не будет."
  }
 },
 {
  "n": 30,
  "titel": "Zigarettenpausen ★",
  "typ": "T3",
  "g": "G8",
  "aufgabe": "Die Mitarbeiter dürfen ab sofort nur noch während der geregelten Pausenzeiten rauchen. Zusätzliche Zigarettenpausen sind nicht mehr erlaubt.",
  "aufgabeRu": "С этого момента курить можно только в официальные перерывы. Дополнительные перекуры больше не разрешены.",
  "folge": {
   "de": "rauchende Kollegen sich stundenlang keine kurze Auszeit mehr nehmen könnten",
   "ru": "курящие коллеги часами не могли бы позволить себе короткую передышку"
  },
  "grund": "passt",
  "plus": "gesund",
  "kopf": "die neuen Einschränkungen — новые ограничения",
  "thema": {
   "de": "die neuen Einschränkungen in Sachen Raucherpausen",
   "ru": "о новых ограничениях насчёт перекуров"
  },
  "inhalt": {
   "de": "Kurze Raucherpausen zwischendurch soll es dann nicht mehr geben.",
   "ru": "Коротких перекуров между делом тогда больше не будет."
  }
 }
];

/* Образцы текстов — собраны автоматически из блоков (build_fb.py). h — метка предложения */
const MUSTER = [
 {
  "n": 0,
  "titel": "Текст-джокер",
  "typ": "—",
  "g": "—",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen [СЛОВО]⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт [слова]⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Änderung soll schon bald für alle gelten.⟧",
    "ru": "⟦Изменение скоро должно действовать для всех.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧.",
    "h": "orig"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦[A], [B] und [C]⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦[A], [B] и [C]⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦sich unsere tägliche Arbeit spürbar verschlechtern würde⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦наша ежедневная работа заметно ухудшилась бы⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 223
 },
 {
  "n": 1,
  "titel": "Kleiderordnung",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Arbeitskleidung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт рабочей одежды⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Reinigung müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Чистку нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns die Reinigung seiner Dienstkleidung selbst bezahlen müsste⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому из нас пришлось бы самому оплачивать чистку рабочей одежды⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 2,
  "titel": "Samstagsarbeit",
  "typ": "T1",
  "g": "G2",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Wochenendarbeit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт работы в выходные⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Freie Samstage soll es dann nicht mehr geben.⟧",
    "ru": "⟦Свободных суббот тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen ihre Wochenenden nicht mehr mit der Familie verbringen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многие коллеги больше не смогли бы проводить выходные с семьёй⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦Arbeitsabläufe effizienter gestaltet werden können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦рабочие процессы можно организовать эффективнее⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 228
 },
 {
  "n": 3,
  "titel": "Zeitmanagement",
  "typ": "T1",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Zeitmanagement⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт тайм-менеджмента⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧.",
    "h": "orig"
   },
   {
    "id": "5b",
    "de": "⟦Eine Weiterbildung bringt nur dann etwas, wenn sie zur eigenen Tätigkeit passt.⟧",
    "ru": "⟦Обучение приносит пользу только тогда, когда оно подходит к собственной работе.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir während des Seminars unsere laufenden Projekte unterbrechen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы на время семинара прервать текущие проекты⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 221
 },
 {
  "n": 4,
  "titel": "Firmenparkplatz gebührenpflichtig",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Parkplatz⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт парковки⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Kostenlose Parkplätze soll es dann nicht mehr geben.⟧",
    "ru": "⟦Бесплатных мест тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen, die auf das Auto angewiesen sind, jeden Monat zusätzlich Geld ausgeben müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллегам, которые зависят от машины, пришлось бы каждый месяц тратить дополнительные деньги⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 232
 },
 {
  "n": 5,
  "titel": "Rückenfreundliche Bürostühle",
  "typ": "T2",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Büroausstattung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт оснащения офиса⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Hälfte müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Половину нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns einen großen Teil der Anschaffungskosten aus eigener Tasche bezahlen müsste⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому из нас пришлось бы платить из своего кармана большую часть стоимости⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 224
 },
 {
  "n": 6,
  "titel": "Jobticket oder Firmenfahrrad",
  "typ": "T4",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die beiden Vorschläge in Sachen Arbeitsweg⟧ gestritten.",
    "ru": "В команде спорят ⟦об обоих предложениях насчёт дороги на работу⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Beides zusammen soll es leider nicht geben.⟧",
    "ru": "⟦И то и другое вместе, к сожалению, не дадут.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦den Zuschuss zum Jobticket⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦доплату к проездному⟧, так как этот вариант положительно влияет на нашу рабочую среду.",
    "h": "wahl"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦alle Kollegen gleichermaßen davon profitieren können⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦все коллеги могут в равной мере извлечь из этого пользу⟧.",
    "h": "wahl"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Arbeitsweg, Wetter und Gesundheit⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦дорога на работу, погода и здоровье⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.",
    "ru": "Кроме того, многие коллеги могли бы воспринять это решение как более справедливое.",
    "h": "wahl"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
    "ru": "Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его.",
    "h": "wahl"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦auch Kollegen mit einem langen Arbeitsweg bei jedem Wetter bequem zur Arbeit kommen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦и коллеги с долгой дорогой могли бы в любую погоду удобно добираться до работы⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch spricht auch einiges für ⟦das Firmenfahrrad⟧: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако кое-что говорит и в пользу ⟦служебного велосипеда⟧: возможное преимущество, вероятно, в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "wahl"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 203
 },
 {
  "n": 7,
  "titel": "Computerkurs außerhalb der Arbeitszeit",
  "typ": "T1",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Weiterbildung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт обучения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen nach Feierabend noch zusätzlich lernen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многим коллегам пришлось бы после работы ещё и учиться⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 229
 },
 {
  "n": 8,
  "titel": "Alle duzen",
  "typ": "T6",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Anrede⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт обращения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Das förmliche „Sie“ soll es dann nicht mehr geben.⟧",
    "ru": "⟦Официального «Вы» тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Ein gutes Betriebsklima entsteht durch Wertschätzung und nicht durch Vorschriften.⟧",
    "ru": "⟦Хорошая атмосфера на работе возникает из уважения, а не из предписаний.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir auch langjährige Kunden plötzlich duzen müssten, was unprofessionell wirken könnte⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы вдруг говорить «ты» давним клиентам, что могло бы выглядеть непрофессионально⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 9,
  "titel": "Verpflichtende Teamsitzungen ★",
  "typ": "T1",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Besprechungen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт совещаний⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen ihre Abende nicht mehr frei planen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многие коллеги больше не могли бы свободно планировать вечера⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 230
 },
 {
  "n": 10,
  "titel": "Firmenhandy für alle ★",
  "typ": "T1",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Erreichbarkeit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт «быть на связи»⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Wirklich freie Abende soll es dann nicht mehr geben.⟧",
    "ru": "⟦По-настоящему свободных вечеров тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir auch abends und am Wochenende jederzeit mit Anrufen rechnen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы и вечером, и в выходные в любой момент ждать звонков⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦Arbeitsabläufe effizienter gestaltet werden können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦рабочие процессы можно организовать эффективнее⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 229
 },
 {
  "n": 11,
  "titel": "Weniger Müll im Betrieb",
  "typ": "T3",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Snacks⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт перекусов⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Snackautomaten soll es dann nicht mehr geben.⟧",
    "ru": "⟦Автоматов со снеками тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.⟧",
    "ru": "⟦Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen ohne Zeit zum Kochen kaum noch eine schnelle Möglichkeit hätten, sich zu versorgen⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦у коллег без времени на готовку почти не осталось бы возможности быстро перекусить⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 237
 },
 {
  "n": 12,
  "titel": "Mehr Lohn oder Urlaubstage",
  "typ": "T4",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die beiden Vorschläge in Sachen Lohn und Urlaub⟧ gestritten.",
    "ru": "В команде спорят ⟦об обоих предложениях насчёт зарплаты и отпуска⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Beides zusammen soll es leider nicht geben.⟧",
    "ru": "⟦И то и другое вместе, к сожалению, не дадут.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦die zusätzlichen Urlaubstage⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦дополнительные дни отпуска⟧, так как этот вариант положительно влияет на нашу рабочую среду.",
    "h": "wahl"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦diese Variante den Bedürfnissen der meisten Kollegen besser entspricht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦этот вариант лучше отвечает потребностям большинства коллег⟧.",
    "h": "wahl"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Erholung, Familie und Einkommen⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦отдых, семья и доход⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.",
    "ru": "Кроме того, многие коллеги могли бы воспринять это решение как более справедливое.",
    "h": "wahl"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
    "ru": "Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его.",
    "h": "wahl"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦sich alle Kollegen nach den stressigen Projekten besser erholen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦все коллеги лучше отдыхали бы после напряжённых проектов⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch spricht auch einiges für ⟦die Gehaltserhöhung⟧: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter finanziell entlastet werden⟧.",
    "ru": "Однако кое-что говорит и в пользу ⟦повышения зарплаты⟧: возможное преимущество, вероятно, в том, что ⟦сотрудники получают финансовое облегчение⟧.",
    "h": "wahl"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 202
 },
 {
  "n": 13,
  "titel": "Ein großer Drucker pro Etage",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Drucker⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт принтеров⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Eigene Drucker im Büro soll es dann nicht mehr geben.⟧",
    "ru": "⟦Своих принтеров в кабинете тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir für jeden Ausdruck unseren Arbeitsplatz verlassen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы ради каждой распечатки уходить с рабочего места⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Firma langfristig Kosten sparen kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦фирма в долгосрочной перспективе может сэкономить⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 224
 },
 {
  "n": 14,
  "titel": "Freizeitausgleich statt Bezahlung",
  "typ": "T3",
  "g": "G2",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Überstunden⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт сверхурочных⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geld für Überstunden soll es dann nicht mehr geben.⟧",
    "ru": "⟦Денег за сверхурочные тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Einkommen, Familie und Erholung⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦доход, семья и отдых⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen, die auf das zusätzliche Geld angewiesen sind, spürbare finanzielle Einbußen hätten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллеги, которые зависят от дополнительных денег, ощутимо потеряли бы в доходе⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter mehr Zeit zur Erholung haben⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦у сотрудников больше времени на отдых⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 228
 },
 {
  "n": 15,
  "titel": "Energie sparen",
  "typ": "T3",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Heizung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт отопления⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Warme Büros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Тёплых кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Umweltschutz ist wichtig, aber er darf nicht allein auf Kosten der Mitarbeiter gehen.⟧",
    "ru": "⟦Защита окружающей среды важна, но она не должна идти только за счёт сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir bei niedrigen Temperaturen kaum konzentriert arbeiten könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦при низкой температуре мы вряд ли могли бы работать сосредоточенно⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 232
 },
 {
  "n": 16,
  "titel": "Vegetarische Küche",
  "typ": "T3",
  "g": "G9",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Kantinenessen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт еды в столовой⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Fleischgerichte soll es dann nicht mehr geben.⟧",
    "ru": "⟦Мясных блюд тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦alle, die Fleisch essen möchten, ihr Essen künftig von zu Hause mitbringen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦всем, кто хочет есть мясо, впредь пришлось бы приносить еду из дома⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 226
 },
 {
  "n": 17,
  "titel": "Gemeinsames Mittagessen",
  "typ": "T2",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Kosten in Sachen Mittagessen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых расходах насчёт обеда⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Das Essen müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Еду нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns jeden Freitag für ein Essen zahlen müsste, das er sich nicht selbst ausgesucht hat⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому пришлось бы по пятницам платить за еду, которую он сам не выбирал⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 228
 },
 {
  "n": 18,
  "titel": "Obst statt Süßigkeiten",
  "typ": "T3",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Pausensnacks⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт перекусов в перерыв⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Schokolade und Kekse soll es dann nicht mehr geben.⟧",
    "ru": "⟦Шоколада и печенья тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen ihre kleinen Belohnungen im Arbeitsalltag künftig selbst kaufen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллегам впредь пришлось бы самим покупать свои маленькие радости в течение дня⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 19,
  "titel": "Betriebskindergarten",
  "typ": "T5",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦das neue Angebot in Sachen Kinderbetreuung⟧ gestritten.",
    "ru": "В команде спорят ⟦о новом предложении насчёт присмотра за детьми⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant ist eine eigene Kita.⟧",
    "ru": "⟦Планируется свой детсад.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧.",
    "h": "orig"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Budget, Fairness und Prioritäten⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦бюджет, справедливость и приоритеты⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦ein großer Teil des Budgets nur den Kollegen mit kleinen Kindern zugutekäme⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦значительная часть бюджета пошла бы на пользу только коллегам с маленькими детьми⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 20,
  "titel": "Geburtstag des Geschäftsführers",
  "typ": "T2",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Geburtstagsfeier⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт празднования дня рождения⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Feier müssten wir aus eigener Tasche bezahlen.⟧",
    "ru": "⟦Праздник нам пришлось бы платить из своего кармана.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Freiwilligkeit, Budget und Gleichbehandlung⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦добровольность, бюджет и равное отношение⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Aus meiner früheren Firma kenne ich eine ähnliche Situation: Dort sollte jeder Geld für eine Feier geben, und am Ende fühlten sich viele Kollegen unter Druck gesetzt.",
    "ru": "Я знаю похожую ситуацию по своей прежней фирме: там каждый должен был сдавать деньги на праздник, и в итоге многие коллеги чувствовали давление.",
    "h": "ok"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦gerade Kollegen mit geringerem Einkommen sich unter Druck gesetzt fühlen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦именно коллеги с меньшим доходом могли бы почувствовать давление⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 220
 },
 {
  "n": 21,
  "titel": "Bonus ohne Krankheitstage",
  "typ": "T5",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Bonus⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт премии⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant ist eine Prämie für gesunde Mitarbeiter.⟧",
    "ru": "⟦Планируется премия для здоровых сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦manche Kollegen sogar krank zur Arbeit kommen würden, um den Bonus nicht zu verlieren⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦некоторые коллеги приходили бы на работу даже больными, чтобы не потерять премию⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 22,
  "titel": "Kürzere Mittagspause",
  "typ": "T3",
  "g": "G9",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Mittagspause⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт обеденного перерыва⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Lange Mittagspausen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Длинных обеденных перерывов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Jeder hat andere Essgewohnheiten, und die Pause dient schließlich der Erholung.⟧",
    "ru": "⟦У каждого свои пищевые привычки, а перерыв в конце концов служит отдыху.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦uns kaum noch Zeit bliebe, in Ruhe zu essen und uns zu erholen⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦у нас почти не оставалось бы времени спокойно поесть и отдохнуть⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter mehr Zeit zur Erholung haben⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦у сотрудников больше времени на отдых⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 228
 },
 {
  "n": 23,
  "titel": "Meetings online",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Besprechungen⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт совещаний⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Persönliche Treffen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Личных встреч тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "Themen wie ⟦Teamgeist, Vertrauen und Kommunikation⟧ spielen dabei eine große Rolle.",
    "ru": "Такие темы, как ⟦командный дух, доверие и общение⟧, играют при этом большую роль.",
    "h": "ok"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦der persönliche Austausch mit den Kollegen fast vollständig verloren ginge⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦живое общение с коллегами почти полностью исчезло бы⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Firma langfristig Kosten sparen kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦фирма в долгосрочной перспективе может сэкономить⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 224
 },
 {
  "n": 24,
  "titel": "Mehr Praktikanten",
  "typ": "T6",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Personal⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт персонала⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Geplant sind zusätzliche Praktikumsstellen.⟧",
    "ru": "⟦Планируются дополнительные места для стажёров.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Mehraufwand für die Kollegen entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого у коллег появляется много дополнительной работы⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Auf Dauer würden darunter unser Wohlbefinden und unsere Leistungsfähigkeit leiden.⟧",
    "ru": "⟦Со временем от этого пострадали бы наше самочувствие и работоспособность.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦erfahrene Kollegen einen großen Teil ihrer Zeit mit der Einarbeitung verbringen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦опытным коллегам пришлось бы тратить много времени на введение новичков в работу⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 216
 },
 {
  "n": 25,
  "titel": "Klassische Musik",
  "typ": "T6",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Musik am Arbeitsplatz⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт музыки на рабочем месте⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Ruhige Büros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Тихих кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦konzentriertes Arbeiten und Telefonate mit Kunden deutlich schwieriger würden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦сосредоточенная работа и звонки клиентам стали бы заметно сложнее⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 225
 },
 {
  "n": 26,
  "titel": "Bürogestaltung: Großraumbüro ★",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung in Sachen Büroräume⟧ gestritten.",
    "ru": "В команде спорят ⟦о планируемой перестройке насчёт офисных помещений⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Einzelbüros soll es dann nicht mehr geben.⟧",
    "ru": "⟦Отдельных кабинетов тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Bei ständiger Ablenkung und einem hohen Lärmpegel kann niemand konzentriert arbeiten.⟧",
    "ru": "⟦При постоянном отвлечении и высоком уровне шума никто не может работать сосредоточенно.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦der Lärmpegel steigen und die Privatsphäre am Arbeitsplatz verloren gehen würde⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦вырос бы уровень шума и пропало бы личное пространство на рабочем месте⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 224
 },
 {
  "n": 27,
  "titel": "Mitarbeit im Firmengarten",
  "typ": "T1",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neue Pflicht in Sachen Firmengarten⟧ gestritten.",
    "ru": "В команде спорят ⟦о новой обязанности насчёт сада фирмы⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Die Teilnahme wäre dann für alle Pflicht – und zwar nach Feierabend.⟧",
    "ru": "⟦Участие тогда было бы обязательным для всех — причём после работы.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Nach einem langen Arbeitstag brauchen wir den Feierabend, um uns zu erholen und Zeit mit der Familie zu verbringen.⟧",
    "ru": "⟦После долгого рабочего дня нам нужен вечер, чтобы отдохнуть и провести время с семьёй.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir nach Feierabend noch Beete anlegen und pflegen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы после работы ещё сажать и пропалывать грядки⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 238
 },
 {
  "n": 28,
  "titel": "Verstöße gegen die Sicherheitsvorschriften",
  "typ": "T3",
  "g": "G8",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Pläne in Sachen Arbeitssicherheit⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых планах насчёт охраны труда⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Ausnahmen soll es dann nicht mehr geben.⟧",
    "ru": "⟦Исключений тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦eine Atmosphäre der Angst entstehen würde, in der Fehler eher verschwiegen werden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦возникла бы атмосфера страха, в которой об ошибках скорее промолчат⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Sicherheit am Arbeitsplatz erhöht wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦повышается безопасность на рабочем месте⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 219
 },
 {
  "n": 29,
  "titel": "Betriebliche Kinderbetreuung ★",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Urlaubsgeld⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт отпускных⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Extra-Geld für den Urlaub soll es dann nicht mehr geben.⟧",
    "ru": "⟦Дополнительных денег к отпуску тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Gerade Kollegen mit geringerem Einkommen können sich solche zusätzlichen Kosten kaum leisten.⟧",
    "ru": "⟦Именно коллеги с меньшим доходом едва ли могут позволить себе такие дополнительные расходы.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству.",
    "h": "orig"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦alle Kollegen auf einen Teil ihres Einkommens verzichten müssten, obwohl nur wenige die Kita nutzen würden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦всем коллегам пришлось бы отказаться от части дохода, хотя детсадом пользовались бы немногие⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧.",
    "h": "orig"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 233
 },
 {
  "n": 30,
  "titel": "Zigarettenpausen ★",
  "typ": "T3",
  "g": "G8",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!",
    "h": "orig"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die neuen Einschränkungen in Sachen Raucherpausen⟧ gestritten.",
    "ru": "В команде спорят ⟦о новых ограничениях насчёт перекуров⟧.",
    "h": "neu"
   },
   {
    "id": "3",
    "de": "⟦Kurze Raucherpausen zwischendurch soll es dann nicht mehr geben.⟧",
    "ru": "⟦Коротких перекуров между делом тогда больше не будет.⟧",
    "h": "neu"
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie für uns Mitarbeiter mehr Nachteile als Vorteile bringt.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она приносит нам, сотрудникам, больше минусов, чем плюсов.",
    "h": "ok"
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦eine solche Regelung nicht zu jedem passt, weil die Lebenssituationen der Kollegen sehr unterschiedlich sind⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦такое правило подходит не каждому, потому что жизненные ситуации коллег очень разные⟧.",
    "h": "ok"
   },
   {
    "id": "5b",
    "de": "⟦Strenge Kontrollen zerstören das Vertrauen und die Eigenverantwortung der Mitarbeiter.⟧",
    "ru": "⟦Строгий контроль разрушает доверие и самостоятельность сотрудников.⟧",
    "h": "neu"
   },
   {
    "id": "6",
    "de": "Zudem könnte die Motivation im Team unter dieser Regelung leiden.",
    "ru": "Кроме того, от этого правила может пострадать мотивация в команде.",
    "h": "neu"
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер.",
    "h": "orig"
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦rauchende Kollegen sich stundenlang keine kurze Auszeit mehr nehmen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦курящие коллеги часами не могли бы позволить себе короткую передышку⟧.",
    "h": "neu"
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧.",
    "h": "ok"
   },
   {
    "id": "9b",
    "de": "Diesen Vorteil will ich gar nicht bestreiten, aber er wiegt die Nachteile meiner Meinung nach nicht auf.",
    "ru": "Этот плюс я вовсе не оспариваю, но он, по-моему, не перевешивает минусы.",
    "h": "ok"
   },
   {
    "id": "10",
    "de": "Je früher wir offen darüber sprechen, desto eher lässt sich eine Lösung finden, mit der alle leben können.",
    "ru": "Чем раньше мы открыто об этом поговорим, тем скорее найдётся решение, с которым смогут жить все.",
    "h": "wahl"
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы.",
    "h": "orig"
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]",
    "h": "orig"
   }
  ],
  "woerter": 224
 }
];
