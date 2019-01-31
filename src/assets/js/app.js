import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


//window.libs = libs;




var resources = {
    //Navigation
    "navTitle": "Educat e.V.",
    "navEventH": "Veranstaltungen",
    "navEventSub1": "Ostercamp 2019",
    "navEventSub2": "Werwolf Camp 2019",
    "navEventSubArchive": "Archiv",
    "navTeamH": "Wir",
    "navTeamTeam": "Team",
    "navTeamWork": "Mitarbeiten",
    "navGuildH": "Verein",
    "navGuildGuild": "Verein",
    "navGuildConcept": "Konzept",
    "navGuildMember": "Mitgliedschaft",
    "navGuildNewsletter": "Newsletter",
    "navContactH": "Kontakt/Impressum",
    //Main side
    "indexHeader1": "Ostercamp 2019 Frankreich",
    "indexItem1": "In diesem Jahr verwirklichen wir eines unserer länger ersehnten Vorhaben und reisen mit unserem Ostercamp nach Frankreich. Ziel ist ein kleines Dorf unweit von Lunéville. Es wird auch dieses Jahr wieder ganz unterschiedliche Workshops und Spiele geben. Wir haben vor Brot zu backen, eine Käserei zu besuchen und Dinge aus Holz zu basteln. Und es wird einen regen Austausch zwischen beiden Ländern und Sprachen geben. Keine Angst: Die Kinder und Jugendlichen müssen dazu kein Französisch können.<br>Weiter Informationen und die Anmeldung findet sich auf der <a href=\"/veranstaltungen/ostercamp/\">Veranstaltungsseite</a>.",
    "indexHeader2": "Rückblick Werwolf Camp",
    "indexItem2": "Gleich zu Beginn des neuen Jahres fand unser zweites Werwolf Camp statt. In Stetten ob Lontal bei Niederstotzingen konnten wir neben vielen spannenden Werwolf-Runden auch den schönen Neuschnee genießen.",
    "indexHeader3": "Science Camp 2019",
    "indexItem3": "Für das Science Camp 2019 gibt es bereits einen <b>vorläufigen</b> Termin. Dies ist der 12. August bis 23. August 2019. Bislang ist dies jedoch nur ein vorläufiger Termin und könnte sich noch ändern, auch wenn wir davon derzeit nicht ausgehen.",
    "indexItemFr1": "Nous avons déjà fait de nombreux camps avec les enfants, en Allemagne. Nous rêvions de pouvoir partager 5 jours de camp avec des enfants français. Pour la première fois cette année, nous pourrons nous amuser, échanger et faire des sorties entre français et allemands. Si vous parlez quelques mots d'allemands c'est encore mieux, mais ne vous en faites pas il y a toujours moyens de se comprendre.<br>Vous trouverez plus d'informations et les inscriptions sur la <a href=\"/veranstaltungen/ostercamp/\">page de l'événement</a>.",
    //Wir
    "teamStr1": "Wir sind eine Gruppe junger Menschen, die einerseits in ganz verschiedenen wissenschaftlichen Themen interessiert sind und andererseits sehr viel Spaß an der Arbeit mit Kinder haben. Einige sind aus Geislingen und Umgebung, längst aber auch darüber hinaus. Waren es anfangs noch ein paar Kommilitonen, die dazu kamen, sind heute viele aus ganz Deutschland dabei.",
    "teamStr2": "Die Teamzusammensetzung der Betreuer- und Organisationsteams der einzelnen Veranstaltungen variiert dabei stark, je nach Zeit und Lust. So kommen auch ständig neue Menschen dazu, sei es aus dem Freundes- und Bekanntenkreis, ehemalige Teilnehmerinnen und Teilnehmer oder auch Personen, die zuvor nichts mit uns zu tun hatten.",
    "teamStr3": "Wir legen dabei sehr viel Wert auf den Teamzusammenhalt, bei dem es keine Hirarchien gibt. Auch wenn es natürlich Verantwortliche für bestimmte Aufgaben gibt und, insbesondere für die Eltern, immer einen verantwortlichen Ansprechpartner, manche mögen auch \"Chef\" sagen, verstehen wir uns intern als eine Einheit, die die Veranstaltungen gemeinsam plant, durchführt und koordiniert. Damit einher geht Verantwortung für jedes Teammitglied, der jeder seinen Fähigkeiten entsprechend gerecht werden muss. Gerade neue, unerfahrene Teammitglieder benötigen dabei natürlich Unterstützung, die die Langjährigen, Erfahrenen unter uns gerne geben.",
    "teamStr4": "Am Ende jeder Veranstaltung sollen nicht nur alle Kinder, sondern auch alle von uns sagen können, es hat Spaß gemacht. Das ist der Grund und der Antrieb für uns, immer wieder neue Aktionen durchzuführen.",
    "teamMeb0Name": "und weitere...",
    "teamMeb0Str": "",
    "teamMeb1Name": "Jana",
    "teamMeb1Str": "»Die Zukunft der Erde liegt bei den Kindern. Ihnen einen Raum zu geben, in dem sie kreativ sein und ihren Fragen nachgehen können, ist großartig.«",
    "teamMeb2Name": "Melissa",
    "teamMeb2Str": "",
    "teamMeb3Name": "Daniel",
    "teamMeb3Str": "»Das Science Camp ist einfach einmalig. Die große Begeisterung aller ist extrem ansteckend und total inspirierend!«",
    "teamMeb4Name": "Tim",
    "teamMeb4Str": "»Ich bin dabei, weil die Freude, die die Teilnehmer im Science Camp haben mich jedes Mal aufs Neue begeistert.«",
    "teamMeb5Name": "Patric",
    "teamMeb5Str": "»Es ist einfach toll, zusammen mit den Kindern neue Dinge zu entdecken und dabei einen wahnsinnigen Spaß zu haben. Deswegen bin ich dabei«",
    "teamMeb6Name": "Rafael",
    "teamMeb6Str": "»Spielen, Experimentieren und Lernen gehört für mich schon immer zusammen und bereitet mir große Freude, die ich gerne mit allen teile«",
    "teamMeb7Name": "Leonie",
    "teamMeb7Str": "",
    "teamMeb8Name": "Marcel",
    "teamMeb8Str": "»Die Kombination aus einem super netten Team und begeisterten Kindern ist einfach wunderbar!«",
    "teamMeb9Name": "Johanna",
    "teamMeb9Str": "",
    "teamMeb10Name": "Tabea",
    "teamMeb10Str": "",
    "teamMeb11Name": "Anne",
    "teamMeb11Str": "»Wenn nette Leute und coole Kids zusammenkommen, wenn getüftelt, experimentiert und gelacht wird, dann bin ich wohl im Science Camp.«",
    "teamMeb12Name": "Cole",
    "teamMeb12Str": "",
    "teamMeb13Name": "Elise",
    "teamMeb13Str": "",
    //Mitarbeiten
    "teamworkHeader": "Mitarbeiten",
    "teamworkStr1": "Hast du Spaß an der Arbeit mit Kindern und Jugendlichen? Und Lust auf eine spassige und spannende Beschäftigung in den Ferien? Dann bist du bei uns richtig!",
    "teamworkStr2": "Wir sind eine Gruppe von Menschen, die in Geislingen und Umgebung Angebote für Kinder und Jugendliche bieten wollen. Es geht dabei auch darum, alternative Bildungsangebote zu schaffen. Seit einigen Jahren veranstalten wir Ferienfreizeiten, Thementage, Ausflüge und Seminare, wofür wir den Verein Educat e.V. gegründet haben.",
    "teamworkStr3": "Für unsere Freizeiten, aber auch für Projekte unterm Jahr suchen wir Betreuer/innen, die Spaß im Umgang mit Kindern und Jugendlichen haben und sich in einer Gruppe wohlfühlen. Du solltest mindestens 14 Jahre als sein und die Bereitschaft mitbringen, dich einzubringen. Die Mitarbeit ist ehrenamtlich, aber du bekommst natürlich eine Aufwandsentschädigung (ca. 15 Euro pro Tag),  Verpflegung, ggf. Unterkunft und alle Events, die zu einer spannenden Freizeit dazu gehören. Auf Wunsch gibt es natürlich auch eine Bescheinigung für alles.",
    "teamworkStr4": "Jede Veranstaltung muss natürlich zuvor geplant und organisiert werden. Oft stoßen Betreuer/innen vergangener Veranstaltungen mit ins Organisationsteam. Wir versuchen aber auch immer Ideen aus dem gesamten Team einfließen zu lassen und möglichst viele Teamler in die Organisation einzubeziehen.",
    "teamworkStr5": "In der Regel haben die Veranstaltung ein Thema. Dies können historische, technische oder auch sonstige wissenschaftliche Themen sein. Einen guten Überblick gibt unser <a href=\"/veranstaltungen/archiv.html\">Veranstaltungsarchiv</a>. Keine Sorge, dazu brauchst du kein wissenschaftliches Studium oder sonstige besondere Fachkenntnisse. Wir wollen eine Atmosphäre bieten, in der man sich wohlfühlen kann und seiner Neugier nachgehen kann. Meist beschäftigen wir uns in kleineren Gruppen mit einzelnen Projekten. Zur Freizeit gehören aber natürlich auch Ausflüge, spannende Spiele, gemeinsames Kochen, die Möglichkeit eigene Ideen umzusetzen, sowie neue Menschen kennenzulernen und vieles mehr. Auf jeden Fall macht es immer viel Spass und bringt eine Menge neue Erfahrungen!",
    "teamworkStr6": "Solltest Du Interesse oder noch weitere Fragen haben, melde dich einfach bei uns: <a href='/kontakt.html'>Kontakt</a>",
    //Verein
    "guildHeader": "Educat e.V.",
    "guildItem1Str1": "Um für unsere Projekte und Freizeiten einen strukturierten und auch rechtlichen Rahmen zu schaffen, haben wir den Verein Educat e.V. gegründet. Ziele des Vereins gemäß der Satzung sind die Forderung der Projekte, Seminaren, Publikationen und Freizeiten. Wir sind auch gemeinnützig anerkannt und können so beispielsweise Spendenbescheinigungen ausstellen. Ebenfalls sind wir Mitglied im Stadtjugendring Geislingen.",
    "guildItem1Str2": "Wenn Sie unseren Verein finanziell untersützen möchten, können Sie Fördermitglied werden. Besuchen Sie dazu unsere <a href='mitgliedschaft.html'>Mitgliedschaftsseite</a>.",
    "guildItem2Str": "Unser Vorstand wurde von der Mitgliederversammlung 2018 wie folgt gewählt:",
    "guildItem2Positions": "1. Vorsitzender: R. Streib<br/>2. Vorsitzender: D. Müller<br/>Kassenwart: P. Garrels<br/>",
    "guildStatuteHeader": "Satzung",
    "guildStatute01": "§ 1 Name und Sitz des Vereins, Geschäftsjahr<br/>1. Der Verein führte den Namen „Educat”. Er soll in das Vereinsregister eingetragen werden und <br/>danach den Zusatz „e.V.” führen.<br/>2. Der Verein hat seinen Sitz in Geislingen an der Steige.<br/>3. Das Geschäftsjahr ist das Kalenderjahr.",
    "guildStatute02": "§ 2 Zweck, Aufgaben, Gemeinnützigkeit des Vereins<br/>1. Der Verein Educat verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke” der Abgabenordnung.<br/>2. Zweck des Vereins ist die Förderung von Kindern und Jugendlichen in ihren Begabungen und dem Interesse zur Wissenschaft. Es geht darum Kindern und Jugendlichen wissenschaftliche Themen näher zu bringen und Freude und Neugier an Fachthemen zu wecken. Der Satzungszweck wird insbesondere verwirklicht durch folgende Maßnahmen:<br/>a. Entwicklung und Durchführung von Seminaren und Ferienfreizeiten für Kinder und Jugendliche.<br/>b. Beratung und Information der Mitglieder, sowie der interessierten Öffentlichkeit.<br/>c. Veröffentlichung von Publikation zu den Themen.<br/>3. Der Verein legt Wert auf Bildungsgerechtigkeit. Jedes Kind sollte die Möglichkeit haben entsprechend seiner Begabungen gefördert zu werden.<br/>4. Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.<br/>5. Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus den Mitteln des Vereins. Keine Person darf durch unverhältnismäßig hohe Vergütungen oder durch Ausgaben, die dem Zweck des Vereins fremd sind, begünstigt werden.",
    "guildStatute03": "§ 3 Erwerb der Mitgliedschaft<br/>1. Mitglied des Vereins kann jede natürliche Person und jede juristische Person werden.<br/>2. Die Aufnahme in den Verein ist schriftlich beim Vorstand zu beantragen. Der Vorstand entscheidet über den Aufnahmeantrag. Will er dem Antrag nicht stattgeben, entscheidet hierüber die nächste ordentliche Mitgliederversammlung.<br/>3. Die Mitgliedschaft wird nach Zustimmung des Vorstands oder der Mitgliederversammlung gültig. Eine Aufnahmegebühr wird nicht verlangt.<br/>4. Auf Vorschlag des Vorstands kann die Mitgliederversammlung für Verdienstvolle Beiträge zu den Veranstaltungen oder Publikationen in den Verein als Ehrenmitglieder aufnehmen.<br/>5. Fördermitglieder<br/>a. Fördermitglieder des Vereins können natürliche und juristische Personen werden.<br/>b. Fördermitglieder fördern die Vereinsziele primär durch ihren Förderbeitrag.<br/>c. Fördermitglieder werden zu Mitgliedervollversammlungen eingeladen, besitzen ein Rederecht, jedoch kein Wahl-, Stimm- und Antragsrecht.",
    "guildStatute04": "§ 4 Beendigung der Mitgliedschaft<br/>1. Die Mitgliedschaft im Verein endet durch Tod, Austritt oder Ausschluss.<br/>2. Der Austritt ist schriftlich gegenüber dem Vorstand zu erklären. Der Austritt kann nur mit einer Frist von vier Wochen erklärt werden.<br/>3. Ein Mitglied oder Fördermitglied kann durch Beschluss der Mitgliederversammlung aus dem Verein ausgeschlossen werden, wenn es schuldhaft das Ansehen oder die Interessen des Vereins in schwerwiegender Weise geschädigt oder die ihm nach der Satzung obliegenden Pflichten wiederholt verletzt hat.<br/>3.Ein Fördermitgliedkann durch Beschluss der Mitgliederversammlung oder des Vorstands ausgeschlossen werden, wenn es mehr als zwölf Monate mit der Zahlung seiner Förderbeiträge in Rückstand ist und trotz schriftlicher Mahnung unter Androhung des Ausschlusses die rückstandigen Beiträge nicht eingezahlt hat.<br/>5. Dem Mitglied oder Fördermitglied ist Gelegenheit zu geben, in der Mitgliederversammlung zu den Gründen des Ausschlusses Stellung zu nehmen. Diese sind ihm mindestens zwei Wochen vorher mitzuteilen.",
    "guildStatute05": "§ 5 Rechte und Pflichten der Mitglieder<br/>1. Jedes Mitglied hat das Recht, bei der Planung und Durchführung der Seminare und Freizeiten mitzuwirken und seine Ideen und Fähigkeiten dabei einzubringen.<br/>2. Jedes Mitglied hat gleiches Stimm- und Wahlrecht in der Mitgliederversammlung.<br/>3. Jedes Mitglied hat die Pflicht, die Interessen des Vereins zu fördern soweit es in seinen Kräften und Kompetenzen steht, die Veranstaltungen durch seine Mitarbeit zu unterstützen.",
    "guildStatute06": "§ 6 Mitgliedsbeiträge<br/>Der Verein erhebt keine Mitgliedsbeiträge.",
    "guildStatute07": "§ 7 Förderbeiträge<br/>1. Die Beiträge dienen der Umsetzung der satzungsgemäßen Zwecke des Vereins.<br/>2. Durch die Zahlung des Förderbeitrages entstehen für die Mitglieder keine Ansprüche auf Sachoder anders geartete Leistungen.<br/>3. Der Beitrag für Fördermitglieder beträgt mindestens 30 Euro pro Kalenderjahr.<br/>4. Der Beitrag für Fördermitglieder kann auf Antrag durch den Vorstand verringert und erlassen werden.<br/>5. Der Verein erhebt erstmals für das Jahr 2017 Beiträge.<br/>6. Der Förderbeitrag wird erstmals im Jahr der Neuaufnahme von Fördermitgliedern fällig.<br/>7. Der Mitgliedsbeitrag wird jeweils zum 14.02. eines jeden Kalenderjahres fällig.",
    "guildStatute08": "§ 8 Organe des Vereins<br/>Organe des Vereins sind der Vorstand und die Mitgliederversammlung.",
    "guildStatute09": "§ 9 Vorstand<br/>1. Dem Vorstand des Vereins obliegen die Vertretung des Vereins nach § 26 BGB und die Führung seiner Geschäfte. Er hat insbesondere folgende Aufgaben:<br/>a. die Einberufung und Vorbereitung der Mitgliederversammlungen einschließlich der Aufstellung der Tagesordnung,<br/>b. die Ausführung von Beschlüssen der Mitgliederversammlung,<br/>c. die Verwaltung des Vereinsvermögens und die Anfertigung des Jahresberichts,<br/>d. die Aufnahme neuer Mitglieder und Fördermitglieder.<br/>2. Der Vorstand besteht aus dem Vorsitzenden, seinem Stellvertreter und dem Schatzmeister.<br/>3. Alle Vorstandsmitglieder vertreten den Verein allein.<br/>4. Die Mitglieder des Vorstandes werden von der Mitgliederversammlung für die Dauer von einem Jahr einzeln gewählt. Mitglieder des Vorstands können nur Mitglieder des Vereins sein; mit der Mitgliedschaft im Verein endet auch die Mitgliedschaft im Vorstand. Die Wiederwahl oder die vorzeitige Abberufung eines Mitglieds durch die Mitgliederversammlung sind zulässig. Ein Mitglied bleibt nach Ablauf der regulären Amtszeit bis zur Wahl seines Nachfolgers im Amt. Scheidet ein Mitglied vorzeitig aus dem Vorstand aus, so sind die verbleibenden Mitglieder berechtigt, ein Mitglied des Vereins bis zur Wahl des Nachfolgers durch die Mitgliederversammlung in den Vorstand zu wählen.<br/>5. Der Vorstand tritt nach Bedarf zusammen. Die Sitzungen werden vom Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter, einberufen. Eine Einberufungsfrist von einer Woche soll eingehalten werden. Der Vorstand ist beschlussfähig, wenn mindestens zwei Mitglieder anwesend sind. Bei der Beschlussfassung entscheidet die Mehrheit der abgegebenen gültigen Stimmen. Bei Stimmengleichheit entscheidet die Stimme des Vorsitzenden, bei dessen Verhinderung die seines Stellvertreters.<br/>6. Die Beschlüsse des Vorstandes sind zu protokollieren. Das Protokoll ist vom Protokollführer sowie vom Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter oder einem anderen Mitglied des Vorstandes zu unterschreiben.",
    "guildStatute10": "§ 10 Mitgliederversammlung<br/>1. Die Mitgliederversammlung ist zuständig für die Entscheidungen in folgenden<br/>Angelegenheiten:<br/>a. Änderungen der Satzung,<br/>b. die Auflösung des Vereins,<br/>c. die Aufnahme neuer Vereinsmitglieder in den Fällen des § 3 Nr. 2 Satz 3, die Ernennung von Ehrenmitgliedern sowie den Ausschluss von Mitgliedern aus dem Verein,<br/>d. die Wahl und die Abberufung der Mitglieder des Vorstands,<br/>e. die Entgegennahme des Jahresberichts und die Entlastung des Vorstands,<br/>f. die Festsetzung der Aufnahmegebühr und der Mitgliedsbeiträge.<br/>2. Mindestens einmal im Jahr, möglichst im ersten Quartal, ist vom Vorstand eine ordentliche Mitgliederversammlung einzuberufen. Die Einberufung erfolgt schriftlich unter Einhaltung einer Frist von zwei Wochen und unter Angabe der Tagesordnung.<br/>3. Die Tagesordnung setzt der Vorstand fest. Jedes Vereinsmitglied kann bis spätestens eine Woche vor der Mitgliederversammlung beim Vorstand schriftlich eine Ergänzung der Tagesordnung beantragen. Über den Antrag entscheidet der Vorstand. Über Anträge zur Tagesordnung, die vom Vorstand nicht aufgenommen wurden oder die erstmals in der Mitgliederversammlung gestellt werden, entscheidet die Mitgliederversammlung mit der Mehrheit der Stimmen der anwesenden Mitglieder; dies gilt nicht für Anträge, die eine Änderung der Satzung, die Auflösung des Vereins oder Änderungen der Mitgliedsbeiträge zum Gegenstand haben.<br/>4. Der Vorstand hat eine außerordentliche Mitgliederversammlung einzuberufen, wenn es das Interesse des Vereins erfordert oder wenn ein Viertel der Mitglieder dies schriftlich unter Angabe des Zwecks und der Gründe beantragt. Soweit die Umstände dies zulassen, ist eine Ladungsfrist von zwei Wochen einzuhalten und die Tagesordnung mit der Einladung bekannt zu geben.<br/>5. Die Mitgliederversammlung wird von einem durch die Mitgliederversammlung zu wählenden Versammlungsleiter geleitet.<br/>6. Die Mitgliederversammlung ist beschlussfähig, wenn mindestens ein Drittel aller Vereinsmitglieder anwesend ist. Bei Beschlussunfähigkeit ist der Vorstand verpflichtet, innerhalb von vier Wochen eine zweite Mitgliederversammlung mit der gleichen Tagesordnung einzuberufen. Diese ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig. Hierauf ist in der Einladung hinzuweisen.<br/>7. Die Mitgliederversammlung beschließt in offener Abstimmung mit der Mehrheit der Stimmen der anwesenden Mitglieder. Kann bei Wahlen kein Kandidat die Mehrheit der Stimmen der anwesenden Mitglieder auf sich vereinen, ist gewählt, wer die Mehrheit der abgegebenen gültigen Stimmen erhalten hat; zwischen mehreren Kandidaten ist eine Stichwahl durchzuführen. Stimmenthaltungen gelten als ungültige Stimmen. Beschlüsse über eine Änderung der Satzung bedürfen der Mehrheit von drei Vierteln, der Beschluss über die Auflösung des Vereins der Zustimmung von neun Zehnteln der anwesenden Mitglieder.<br/>8. Über den Ablauf der Mitgliederversammlung und die gefassten Beschlüsse ist ein Protokoll zu fertigen. Dieses ist vom Protokollführer und vom Versammlungsleiter zu unterschreiben.",
    "guildStatute11": "§ 11 Auflösung des Vereins, Beendigung aus anderen Gründen, Wegfallsteuerbegünstigter Zwecke<br/>1. Im Falle der Auflösung des Vereins oder Wegfallen der steuerbegünstigten Zwecke sind der Vorsitzende des Vorstands und sein Stellvertreter gemeinsam vertretungsberechtigte Liquidatoren, falls die Mitgliederversammlung keine anderen Personen beruft.<br/>2. Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an die „J.A. COMENIUS-STIFTUNG – zur Unterstützung Not leidender Kinder und Jugendlicher“, die das Geld unmittelbar und ausschließlich für gemeinnützige Zwecke verwendet.<br/>3. Die vorstehenden Bestimmungen gelten entsprechend, wenn der Verein aus einem anderen Grund aufgelöst wird oder seine Rechtsfähigkeit verliert.",
    //Konzept
    "conceptHeader": "Unser Konzept",
    "conceptStr1": "Wichtig ist uns der Spaß bei unseren Veranstaltung. Spaß für alle Teilnehmer aber auch für uns Ehrenamtlichen, die wir viel Zeit in diese Projekte stecken. Alle unsere Angebote sollen jedoch auch unseren selbst gesteckten Ansprüchen genügen.",
    "conceptStr2": "Wir wollen das <b>Feuer des forschenden Denkens</b> bei Kinder und Jugendlichen entfachen und schüren. Forschen beginnt mit Neugier und damit, etwas wirklich wissen zu wollen. Es setzt die Bereitschaft voraus, Dingen auf den Grund gehen zu wollen. Zum Forschen gehört aber auch die Methodik und die Umsetzung von Ergebnissen. Dazu wollen wir ermutigen und Unterstützung bieten.",
    "conceptStr3": "Wir wollen Kindern und Jugendlichen <b>Einblick in die Welt der Wissenschaft</b> bieten. Dazu gehören wissenschaftliche Kompetenzen in verschiedenen Fachbereichen, Forschungsthemen und das Erleben und Erfahren dieser Welt. Dies geschieht zum einen durch den Austausch mit Studenten, Wissenschaftlern und Schülern und den Besuch von Ausstellungen und Museen. Zum anderen sollen die Kinder durch eigene Experimente erleben, wie Erfahrungen über die Welt, in der sie leben, gewonnen werden können.",
    "conceptStr4": "Wir wollen Kinder und Jugendliche nach ihren Interessen und <b>Begabungen fördern</b>. Wir wollen, dass aus der Neugier ein Interesse an den Themen und vor allem an den Fragen entsteht. Wir betonen die Bildungsgerechtigkeit, jedes Kind sollte die Möglichkeit haben entsprechend seiner Begabungen gefördert zu werden und zu lernen. Gegenseitige <b>Achtung und Rücksicht</b> sind hierfür die Grundlage.",
    "conceptStr5": "Der <b>Begriff Wissenschaft</b> (insbesondere der englische Begriff <i>science</i>) beschränkt sich unserer Ansicht nach nicht auf die klassischen Naturwissenschaften. Wissenschaftliche Erkenntnis folgt nicht allein aus Statistik und Beweis. So hat eine neurowissenschaftliche Erkenntnis auch eine philosophische und psychologische Seite und auch ein mathematischer Beweis hat eine historische Perspektive. Spätestens bei Fächern wie Psychologie und Archäologie muss uns klar werden, dass Wissenschaften nie für sich allein erfolgreich sein können. Unser Ziel ist es daher auch, ein <b>interdisziplinäres Verständnis</b> zu schaffen.",
    "conceptStr6": "Wir wollen junge Menschen ermutigen, selbst etwas zu schaffen, anstatt sich mit vorgefertigten Meinungen und Lösungsstrategien zufrieden zu geben.",
    "conceptStr7": "Schon Kinder werden mit der Frage konfrontiert, wie sie sich ihre Zukunft vorstellen und wo sie ihren Platz in der Welt sehen. Die Schule bietet vorselektiertes Wissen, aber selten ermöglicht sie, eigene Fragen zu stellen und die für sich selbst passenden Antworten zu finden. Was eigene Potentiale, Möglichkeiten und wirkliche Interessen sind, gerät dabei oft aus dem Blick. Wir wollen diese Lücke schließen und einen Raum bieten, um eigenen Ideen und Fragen nachgehen zu können und zu <b>wirklicher Bildung</b> zu gelangen.",
    "conceptStr8": "Diesem ehrgeizigen Ziel widmen wir unsere Thementage und Sommerfreizeiten.",
    //Mitgliedschaft
    "memberHeader": "Mitgliedschaft",
    "memberStr1": "Wenn du Interesse an einer aktiven Mitarbeit bei unseren Veranstaltungen hast, finden sich <a href='/ueberuns/mitarbeiten.html'>hier</a> weitere Informationen.",
    "memberStr2": "Für alle, die unseren Verein und damit alle Veranstaltungen unterstützen möchten, bieten wir seit 2017 eine Fördermitgliedschaft an. Immer wieder hatten uns Eltern darauf angesprochen, unseren Verein unterstützen zu möchten. Fördermitglieder unterstützen den Verein mit ihrem Mitgliedsbeitrag, der selbst gewählt werden kann. Der jährliche Mindestbeitrag liegt bei 30€.",
    "memberStr3": "Alle Fördermitglieder werden zu den Mitgliederversammlungen eingeladen, haben ein Rederecht, jedoch kein Stimmrecht. Für eine Fördermitgliedschaft wenden Sie sich per Mail an uns (<a href='/kontakt.html'>Kontakt</a>) oder sprechen uns bei einer Veranstaltung einfach an.",
    //Newsletter
    "newsletterHeader": "Newsletter",
    "newsletterStr1": "Vor Veranstaltungen verschicken wir Informationen dazu vor Anmeldungsbeginn per Mail an alle, die das wünschen. Tragen Sie dazu einfach die Mailadresse in das Feld ein. Sollten Sie unsere Mails nicht mehr erhalten wollen, können Sie uns das jederzeit per Mail mitteilen.",
    //Kontakt
    "contactContactHeader": "Kontakt",
    "contactContactMail": "kontakt@educatweb.de",
    "contactContactTel1": "0157 / 300 52 349 (Daniel Müller)",
    "contactContactTel2": "0162 / 134 8860 (Patric Garrels)",
    "contactContactAddr": "Educat e.V.<br> Ostmarkstraße 13<br> 73312 Geislingen",
    "contactImprHeader": "Impressum",
    "contactImprStr1": "Angaben gemäß § 5 TMG:",
    "contactImprStr2": "Educat e.V.",
    "contactImprStr3": "Vertretungsberechtigte:<br/> Rafael Streib, Daniel Müller, Patric Garrels",
    "contactImprStr4": "Eingetragen im Vereinsregister Geislingen (Registernummer: 737)",
    "contactImprStr5": "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/> 62101/07234",
    //Archiv
    "archiveHeader": "Vergangene Veranstaltungen",
    "archiveItem1": "Seit 2012 veranstalten wir regelmäßig verschiedene Freizeiten und Aktivitäten für Kinder und Jugendliche in und um Geislingen. Auch davor haben einige Vereinsmitglieder bereits Veranstaltungen duchgeführt. Im Folgenden findet sich ein Überblick über vergangene Aktionen.",
    "archiveScHeader": "Science Camps",
    "archiveSc18Name": "Reise um die Welt (2018)",
    "archiveSc18Str": "In allen Winkel der Erde haben sich die Menschen an ihre Umwelt angepasst. Sei es im Eis bei den Inuit oder bei den Aborigines in Australien. Essen aus China, Musik aus Südamerika, Tänze aus Nordamerika und asiatische Kampfkunst waren nur einige der Themen beim Science Camp 2018 in Weiler. Die asiatische Kultur war Thema im Lindenmuseum in Stuttgart, außerdem führte uns ein Ausflug nach Ulm.",
    "archiveSc17Name": "Tüftler und Erfinderinnen (2017)",
    "archiveSc17Str": "Erfinder erfinden. Das weiß jedes Kind. Wir haben bei der Skihütte in Weiler programmiert, Hydraulikgreifarme gebaut, LED-Smileys gelötet, die chemischen Vorgänge beim backen betrachtet und vieles mehr. Die Ausflüge gingen an den Bodensee ins Dorniermuseum sowie ins Porsche Museum in Stuttgart. In den beiden Wochen hatten alle bei bestem Wetter eine Menge Spaß.",
    "archiveSc16Name": "Natur und Ökologie (2016)",
    "archiveSc16Str": "Alles Leben auf der Erde hängt irgendwie zusammen - eine Eule fängt Mäuse, die Mäuse fressen Samen und Nüsse und die Pflanzen brauchen Regen zum wachsen. Beim Naturfreundehaus Immenreute zwischen Geislingen und Donzdorf haben wir uns mit Evolution, Ameisenvölkern und Nachhaltigkeit beschäftigt, Insektenhotels gebaut und Stoffe mit Naturfarben gefärbt.",
    "archiveSc15Name": "Luft- und Raumfahrt (2015)",
    "archiveSc15Str": "Schon seit langer Zeit fasziniert die Menschen der Himmel. Sie beobachteten die Sterne und erfanden ganz verschiedene Möglichkeiten, sich in die Lüfte zu erheben - Flugzeuge, Drachen, Zeppeline oder gar Raketen. Auf dem Segelflugplatz Berneck der Geislinger Segelflieger haben wir uns mit allerlei Fluggeräten beschäftigt, selbst Wasserraketen gebaut und dem Flughafen Stuttgart einen Besuch abgestattet.",
    "archiveSc14Name": "Mittelalter (2014)",
    "archiveSc14Str": "Ein buntes Spektakel mit tapferen Rittern, lustigen Gauklern, edlen Prinzessinnen und großen Burgfesten erwartete alle Teilnehmerinnen und Teilnehmer auf der Burgruine Helfenstein über Geislingen. Gewänder wurden genäht, Musikinstrumente gebaut und viele Knappen wurden zum Ritter ausgebildet. Das Kloster Lorch und die Burgruine Hohenstaufen wurden besucht und die Helfensteiner vom gleichnahmigen Verein sind beim abschließenden Burgfest auch noch zu Besuch gewesen.",
    "archiveSc13Name": "Antike (2013)",
    "archiveSc13Str": "Wir beschäftigten uns mit der Welt der alten Griechen und Römer, die erstaunlich Fortschrittliches hervorgebracht hat. Auch lokalen Spuren dieser Zivilisationen statteten wir einen Besuch ab.",
    "archiveSc12Name": "Bionik (2012)",
    "archiveSc12Str": "Die Natur hat erstaunliche Lösungen hervorgebracht, von der wir Menschen viel lernen können. Der Lotuseffekt war nur einer von vielen Programmpunkten in diesem Camp.",
    "archiveSc11Name": "Steinzeit (2011)",
    "archiveSc11Str": "Sehr weit zurück in der Geschichte gingen wir bei diesem Camp. Eigene Höhlenmalereien und ein Besuch des Federsees mit dem archäologischen Museum und dem angerenzenden Freigelände waren nur zwei der Höhepunkte.",
    "archiveSc10Name": "Weltall (2010)",
    "archiveSc10Str": "Im ersten Jahr beschäftigten wir uns mit der Welt der Sterne.",
    "archiveOcHeader": "Ostercamps und Herbstcamps",
    "archiveOc18Name": "Ostercamp 2018",
    "archiveOc18Str": "Roboter mit Lego Mindstorms bauen und programmieren, Filtiere basteln und ein Ausflug ins Urgeschlichtliche Museum Blaubeuren und ins Bad Blau waren nur einige der spannenden Programmpunkte des Ostercamps 2018 in der Blauhütte bei Blaubeuren.",
    "archiveOc17Name": "Ostercamp 2017",
    "archiveOc17Str": "Die Burg Derneck war Ort für viele Spiele, spannende Erkundungstouren und einer tollen Woche zusammen. Rund um Natur und Kreativität wurde gebastelt und ausprobiert. Bevor wir am letzten Tag wieder zurück nach Geislingen fuhren, gingen wir noch zum schwimmen ins Hallenbad.",
    "archiveOc15Name": "Ostercamp 2015",
    "archiveOc15Str": "Wir hatten eine wunderbare Woche im Schwarzwald verbracht. Inmitten der Natur hatten wir Staudämme gebaut, Käfer in der Becherlupe beobachtet, waren Schwimmen, saßen am Feuer … und haben noch viele andere tolle Dinge erlebt.",
    "archiveOc13Name": "Ostercamp 2013",
    "archiveOc13Str": "Die Besonderheiten und Alltäglichkeiten der Natur vor unserer Haustüre konnten wir bei diesem Ostercamp näher betrachten und verstehen lernen.",
    "archiveHc12Name": "Herbstcamp 2012",
    "archiveHc12Str": "Die unterschiedlichsten Kulturen und Völker der Erde waren Thema bei diesem Herbstcamp. So konnten wir viel Interessantes und Kurioses lernen und erleben.",
    "archiveTripHeader": "Ausflüge und sonstige Projekte",
    "archiveTrip171Name": "Ausflug Herbst 2017 Ulm",
    "archiveTrip171Str": "Für einen Besuch im Naturkundemuseum Ulm sowie ein GPS-Stadtspiel durch die Altstadt waren wir als Nachtreffen des Science Camps 2017 einen Tag in Ulm. Während es beim Stadtspiel interessante Fragen zu bekannten Gebäuden in Ulm zu lösen galt, gab es im Naturkundemuseum ein kleines Rätsel zum Herbst.",
    "archiveTrip161Name": "Ausflug Herbst 2016 Stuttgart",
    "archiveTrip161Str": "Als Nachtreffen zum Science Camp 2016 sind wir nach Stuttgart ins Haus des Waldes sowie ins Planetarium im Schlosspark gefahren. Interessante Einblicke in den Wald und ausergewöhnliche Pilze bleiben sicherlich genauso wie die Reise mit einer Papierrakete quer durch unser Sonnensystem lange in Erinnerung.",
    "archiveTripSdName": "Science Days",
    "archiveTripSdStr": "Seit 2010 haben wir Tagesveranstaltungen organisiert und uns dabei verschiedenen wissenschaftlichen Themen gewidmet.",
    "archiveTrip151Name": "Ausflug Winter 2015",
    "archiveTrip151Str": "In der kalten Jahreszeit haben wir einen Museumsausflug ins Deutsche Museum in München unternommen.",
    "archiveTrip152Name": "Ausflug Bodensee 2015",
    "archiveTrip152Str": "Am Bodensee haben wir sowohl die Schifffahrt als auch die Luftfahrt genauer betrachtet. Im Zeppelinmusuem schauten wir dazu die riesigen Luftschiffe der Vergangenheit an.",
    "archiveWc18Name": "Werwolf Camp 2018",
    "archiveWc18Str": "Gleich zu Begin des Jahres waren wir mit einer großen Gruppe Jugendlicher im Freizeitheim Asch bei Blaubeuren. Dort haben wir das beliebte Spiel Werwölfe vom Düsterwald ausgiebig gespielt, unter anderem in einer großen Gesamtrunde. Daneben gab es auch Spannendes zum geschichtlichen Hintergrund der Werwölfe oder zur Spieltheorie zu erfahren.",
    "archiveTrip18Name": "Ausflug Herbst 2018",
    "archiveTrip18Str": "Das Technikmuseum in Speyer mit dem Space Shuttle Buran, einer Boing 747, einem U-Boot der Deutschen Marine, einer Antonov und vielen weiteren spannenden Exponaten war Ziel eines Ausflugs im Herbst 2018. Die kleine, aber hoch interessierte Gruppe besuchte auch einen Film im IMAX 4D-Kino.",
    "archiveWc19Name": "Werwolf Camp 2019",
    "archiveWc19Str": "Gleich zu Beginn des neuen Jahres fand unser zweites Werwolf Camp statt. In Stetten ob Lontal bei Niederstotzingen konnten wir neben vielen spannenden Werwolf-Runden auch den schönen Neuschnee genießen. Außerdem besuchten wir den Archäopark Vogelherd bei Stetten.",
    //Ostercamp
    "ocHeader": "Ostercamp 2019",
    "ocItem1Header": "Leben morgen - Vivre demain",
    "ocItem1Str1": "In diesem Jahr verwirklichen wir eines unserer länger ersehnten Vorhaben und reisen mit unserem Ostercamp nach Frankreich. Ziel ist ein kleines Dorf unweit von Lunéville. Thema ist dabei, wie könnte es anders sein, der Austausch zwischen beiden Ländern und beiden Sprachen. Keine Angst: Ihr müsst dazu kein Französisch können.",
    "ocItem1Str2": "Es wird auch dieses Jahr wieder ganz unterschiedliche Workshops und Spiele geben. Wir haben vor Brot zu backen, eine Käserei zu besuchen und Dinge aus Holz zu basteln. Es wird einen Ausflug in die nächste Stadt geben und (wie jedes Jahr) gehen wir natürlich auch Schwimmen.",
    "ocItem1Str3": "Aber natürlich wird der Austausch zwischen den beiden Sprachen Deutsch und Französisch unser großes Thema sein. Wir planen Spiele und Aktionen, bei denen man die andere Sprachen kennenlernt - Wir sind alle super gespannt, wie das wird!",
    "ocItem1StrU1": "Nous avons déjà fait de nombreux camps avec les enfants, en Allemagne. Nous rêvions de pouvoir partager 5 jours de camp avec des enfants français. Pour la première fois cette année, nous pourrons nous amuser, échanger et faire des sorties entre français et allemands. Si vous parlez quelques mots d'allemands c'est encore mieux, mais ne vous en faites pas il y a toujours moyens de se comprendre.",
    "ocItem1StrU2": "Comme les dernières années, il y aura des activités, des jeux et des ateliers thématiques. Nous avons prévu de préparer du pain, visiter une fromagerie et fabriquer des petits objets en bois. Il y aura aussi une excursion dans une ville voisine et comme chaque année, nous irons aussi à la piscine.",
    "ocItem1StrU3": "Naturellement, il y aura aussi des échanges en allemand et en français à travers des jeux et des activités pour que chacun puisse se familiariser avec la langue de l’autre.",
    "ocItem2Header": "Wo - Où",
    "ocItem2Str1": "Das Ostercamp findet in Reillon in Frankreich statt. In dem winzigen Dorf gibt es ein schönes Seminarhaus. Reillon liegt in der Nähe der Städte Lunéville und Nancy.",
    "ocItem2Str2": "Weitere Informationen zum Haus: <a href='https://www.lacroiseedecouverte.fr/le-gite/'>https://lacroiseedecouverte.fr</a>",
    "ocItem2StrU1": "Le Colonie de Vacances de Pâques aura lieu à Reillon, lieu de la maison d’accueil. Reillon est proche de Lunéville, près de Nancy.",
    "ocItem2StrU2": "Pour plus d’informations: <a href='https://www.lacroiseedecouverte.fr/le-gite/'>https://lacroiseedecouverte.fr</a>",
    "ocItem3Header": "Wann - Quand",
    "ocItem3Str1": "Die Freizeit findet von <b>Montag, 15. bis Freitag, 19. April 2019</b> statt. Das ist die Woche vor Ostern. Abfahrt in Geislingen ist am Montagmorgen, Rückkehr am Freitagabend.",
    "ocItem3StrU1": "Le séjour sera du lundi 15 au vendredi 19 avril 2019. C'est la semaine avant Pâques.",
    "ocItem4Header": "Wer - Qui",
    "ocItem4Str1": "Teilnehmen können alle Kinder und Jugendlichen zwischen <b>8 und 15 Jahren</b>. ",
    "ocItem4StrU1": "Tous les enfants et adolescents âgés de <b>8 à 15</b> ans peuvent participer.",
    "ocItem5Header": "Kosten - Frais",
    "ocItem5Str1": "Die gesamte Freizeit kostet <b>129€</b> (90€ Freizeit + 39€ Fahrt mit Bus ab Geislingen).",
    "ocItem5Str2": "Die Veranstaltung wird komplett ehrenamtlich organisiert und wir kalkuliert wie immer sehr knapp. Auf jeden Fall wollen wir die Teilnahme allen ermöglichen, die mitkommen möchten, melden Sie sich daher, wenn die Kosten ein Problem darstellen. Auf der anderen Seite freuen wir uns über eine zusätzliche Spende, um unser Programm zu fördern.",
    "ocItem5Str3": "Der Preis versteht sich inklusive Fahrt, Unterkunft, Verpflegung, Material und Eintritten.",
    "ocItem5StrU1": "Le séjour entier coûte <b>100€</b> (90€ séjour + 10€ l'arrivée da Nancy/ Strasbourg, en projet).",
    "ocItem5StrU2": "L’organisation est totalement bénévole et nous calculons le tarif au plus juste. Nous voulons la participation de tous, c’est pourquoi si le coût pose un problème, signalez le. D’autre part, vous pouvez compléter votre participation par un don afin d’encourager notre programme.",
    "ocItem5StrU3": "Le prix inclut le voyage, l’hébergement, l’alimentation, le matériel et les entrées lors des excursions.",
    "ocItem6Header": "Anmelden - S'inscrire",
    "ocItem6Str1": "Für die Anmeldung füllen Sie bitte dieses <a href='./anmeldung.html'>Online-Formular</a> aus. Sollten Sie Fragen haben, können Sie uns über diese EMailadresse erreichen.",
    "ocItem6StrU1": "Pour vous inscrire, veuillez remplir ce <a href='./anmeldungFr.html'>formulaire en ligne</a>. Si vous avez des questions, vous pouvez nous contacter via cette adresse email.",
    "ocItem6Mail": "kontakt@educatweb.de",
    "ocItem7Header": "Sprache - Langue",
    "ocItem7Str1": "Die Kinder <b>müssen nicht</b> Französisch können! Wenn sie es bereits ein wenig gelernt haben oder es aus der Schule können, dann ist das sehr gut und sicher die beste Möglichkeit zu üben. Wir werden alle Aktionen so gestalten, dass man auch ohne Sprachkenntnisse einsteigen kann. Wir haben ein großes Team aus beiden Ländern, dass sich in beiden Sprachen verständigen kann. Wir sind sehr gespannt, wie die Kinder diese Herausforderung annehmen, sind aber sehr sicher, dass es allen Spaß machen wird!",
    "ocItem7StrU1": "Les enfants ne doivent pas forcément  savoir parler l’allemand ! S’il l’apprennent à l’école, alors ce sera une bonne occasion pour l’exercer. Les activités seront compréhensibles par tous même sans avoir de connaissance en allemand. Nous sommes une grande équipe européenne, ainsi nous pouvons parler et comprendre les deux langues. Nous espérons que les enfants relèveront  le défi mais nous sommes sûrs que tout le monde va s’amuser dans une ambiance conviviale.",
    "ocItemTeamHeader": "Das Team - L'équipe",
    "ocItem7Str": "Das Ostercamp 2018 ist auch schon wieder vorbei und wir haben 4 sehr spannende und schöne Tage auf der Blauhütte verbracht. Wir haben Roboter gebaut und programmiert, Filztiere gebastelt, eine kulinarische Reise unternommen und mit Becherlupen Tiere im Wald beobachtet. Auch ein Ausflug ins nahe Blaubeuren ins dortige Urgeschichtliche Museum und ins Bad Blau in Blaustein standen auf dem Programm. Weitere Bilder und Eindrücke finden sich auf unseren Social Media Seiten. Die Eltern der Teilnehmer haben außerdem eine Mail mit Links zu Bildern und einem Video erhalten.",
    //Ostercamp Anmeldung
    "ocanmeldungHeader": "Anmeldung - Ostercamp 2019",
    "ocanmeldungItem1Str1": "Zur Anmeldung füllen Sie bitte dieses Formular aus. Sind die Daten erfolgreich bei uns eingegangen, wird eine automatische EMail an die angegebene Adresse verschickt. Aktualisieren Sie dazu ggf. ihren EMail-Ordner.",
    "ocanmeldungItem1Str2": "Vor der Freizeit versenden wir nochmals detaillierte Informationen zu Details, sowie der Bezahlung des Freizeitbeitrages. Bei Fragen sind wir selbstverständlich erreichbar (<a href=\"/kontakt.html\">Kontakt</a>).",
    "ocanmeldungFrHeader": "Inscription - Ostercamp 2019",
    "ocanmeldungItem1FrStr1": "Pour vous inscrire, veuillez remplir ce formulaire. Si les données sont envoyées avec succès, un mail sera automatiquement envoyé à l’adresse indiquée. Si nécessaire mettez à jour vos dossiers de messagerie.",
    "ocanmeldungItem1FrStr2": "Avant la rencontre, nous vous enverrons de nouveau un mail plus détaillé concernant la contribution pour le camp. Nous serons bien entendu disponibles pour toute question (<a href=\"/kontakt.html\">contact</a>).",
    //Science Camp
    "scHeader": "Science Camp 2018",
    "scItem1Str1": "Im Science Camp werden wir eine Reise um die Welt unternehmen. In allen Winkel der Erde haben sich die Menschen an ihre Umwelt angepasst. Sei es im Eis bei den Inuit oder bei den Aborigines in Australien. Was essen die Menschen dort, welche Geschichten erzählen sie sich und welche Spiele spielen sie?",
    "scItem1Str2": "Erneut findet das Science Camp in Weiler bei Geislingen statt. Dort gibt es genügend Platz zum Bauen, Forschen und Spielen. Wie jedes Jahr gibt es Ausflüge, eine Übernachtung und alles andere, was das Science Camp so einmalig macht! Das Camp ist für Kinder und Jugendliche zwischen <b>5 und 14 Jahren</b> und findet vom <b>6. August bis 17. August</b> statt. Das Thema <b>\"Reise um die Welt\"</b> verspricht viel Spaß für Mädchen und Jungen gleichermaßen! Auch dieses Jahr ist die Freizeit wieder von der <b>Stiftung Kinderland Baden-Württemberg gefördert</b>.",
    "scItem1Str3": "Erlebe ein unvergessliches Programm mit Musik, spannenden Spielen, einem tollen Team und garantiert jeder Menge Spaß.",
    "scItem1Str4": "Wir freuen uns, euch willkommen zu heißen!",
    "scItem2Header": "Wo",
    "scItem2Str": "Das Science Camp findet bei der Skihütte nahe Weiler statt. Diese liegt eingebettet zwischen zwei Wiesen, die Platz zum Bauen und Spielen bieten.",
    "scItem3Header": "Wer",
    "scItem3Str": "Teilnehmen können alle Kinder und Jugendlichen zwischen <strong>5 und 14 Jahren</strong>, wobei wir altersgerechte Angebote anbieten.<br/>Maximal werden wir 60 Teilnehmerinnen und Teilnehmer aufnehmen, wobei wir in Kooperation mit der Stiftung Kinderland einige Plätze für Kinder mit Fluchthintergrund anbieten.<br/>Egal ob Mädchen oder Jungs, älter oder jünger - wir bieten ein buntes Programm, bei dem für alle etwas dabei ist und es viele Auswahlmöglichkeiten gibt.",
    "scItem4Header": "Wann",
    "scItem4Str": "Die Freizeit findet jeweils <strong>Montag bis Freitag, 6. bis 17. August 2018</strong> statt, jeweils von 9:30 Uhr bis 17:30 Uhr. Eine Teilnahme ist für eine oder zwei Wochen möglich.",
    "scItem5Header": "Kosten",
    "scItem5Str1": "Die gesamte Freizeit kostet <strong>110€</strong>.<br/>Im Preis sind sämtliche Kosten für das Programm, Essen, Trinken und die Ausflüge enthalten.",
    "scItem5Str2": "Nur eine Woche: 60€",
    "scItem5Str3": "Geschwister zahlen pro Woche 10€ weniger",
    "scItem5Str4": "Busshuttle pro Kind und Woche außerhalb Geislingens: 10€",
    "scItem5Str5": "Für weitere Fördermöglichkeiten, kontaktieren sie uns bitte. Gleichzeitig freuen wir uns über eine zusätzlich Spende, die in die Veranstaltung fließt.",
    "scItem5Str6": "Für Kinder mit Fluchthintergrund können wir mit der Stiftung Kinderland einige Plätze vergünstigt anbieten. Bitte bei der Anmeldung unbedingt in dem Freitextfeld \"Besonderheiten\" angeben!",
    "scItem6Header": "Anmelden",
    "scItem6Str1p1": "Die Anmeldung erfolgt über dieses",
    "scItem6Str1p2": "Online-Formular",
    "scItem6Str1p3": "<i>Es sind bereits alle Plätze belegt, auch die Warteliste ist bereits gut gefüllt. Daher ist eine Anmeldung nicht mehr möglich.</i>",
    "scItem6Str2": "Vor der Freizeit versenden wir nochmals detaillierte Informationen zu Details, sowie der Bezahlung des Freizeitbeitrages. Bei Fragen sind wir selbstverständlich erreichbar.",
    "scItem6Str4": "Um zukünftig rechtzeitig über anstehende Veranstaltungen von uns zu wissen, können Sie sich für unseren <a href='/verein/newsletter.html'>Newsletter</a> anmelden.",
    "scItem6Mail": "kontakt@educatweb.de",
    "scItemTeamHeader": "Das Team",
    "scItemParentsHeader": "Für Eltern",
    "scItemParentsStr": "Wir haben im Folgenden einige Informationen rund um das Science Camp für Sie zusammengestellt.<br/>Die Freizeit beruht wie alle unsere Angebote auf unserem <a href='/verein/konzept.html'>Konzept</a>. Zusammen mit der Stiftung Kinderland Baden-Württemberg, die das Science Camp finanziell unterstützt, möchten wir auch dieses Jahr Kinder und Jugendliche mit Flucht- und Migrationshintergrund besonders miteinbeziehen, um auf Basis wissenschaftlicher und spielerischer Begegnung Sprach- und Kulturaustausch zu fördern. Die Stiftung hat dieses Konzept im Rahmen der Ausschreibung \"Spielend Deutsch lernen\" als besonders förderungswürdig ausgezeichnet.",
    "scItem7Header": "Kooperationen",
    "scItem7Str": "Kreisjugendring Göppingen e.V.",
    "scItem8Header": "Gefördert durch",
    "scItem8Str": "Stiftung Kinderland Baden-Württemberg",
    "scItemCurrentStr1": "Das Science Camp 2018 ist leider auch schon wieder vorbei. Zwei wunderbare Wochen liegen hinter uns, und wir sind uns sicher, alle hatten eine Menge Spaß!",
    "scItemCurrentStr2": "Die Bilder des Science Camps sind noch nicht gesichtet. Wir melden uns per Mail bei allen Eltern.",
    "scItem6Str3": "Das Camp ist bereits vorbei, wir sehen uns nächstes Jahr oder bei einer unserer anderen Veranstaltungen wieder.",
    //Science Camp Infos
    "scinfoHeader": "Science Camp 2018 - Informationen",
    "scinfoItem1Header": "Busshuttle",
    "scinfoItem1Str1": "Wir bieten einen Busshuttle von Geislingen aus an. Genaue Abfahrtszeiten und Orte werden wir noch bekannt geben. Als Haltestellen sind momentan Sternplatz und Hauptbahnhof vorgesehen, jedoch können je nach Anmeldungen eventuell auch noch weiter entfernte Stationen hinzu kommen, die auf dem Weg liegen. Da die Kosten hierfür sehr hoch sind, müssen wir pro Kind und Woche dafür 10€ verrechnen (Haltstellen außerhalb von Geislingen).",
    "scinfoItem1Str2": "Der Busshuttle muss bei der Anmeldung angegeben werden, andernfalls kann dieser nicht genutzt werden!",
    "scinfoItem2Header": "Früher kommen",
    "scinfoItem2Str": "Für Berufstätige wollen wir auch dieses mal die Möglichkeit anbieten, dass Kinder schon früher gebracht werden können. Möglich ist das ab 8:00 Uhr. Dabei müssen die Kinder jedoch selbst zu uns gebracht werden, eventuell lassen sich auch Fahrgemeinschaften bilden (wir melden uns dann separat). Wir bitten darum, uns rechtzeitig zu informieren, wenn Ihr Kind/er früher kommt, damit wir uns darauf einstellen können. Dieses Jahr bieten wir auch ein gemeinsames Frühstück ab 8 Uhr an (bitte auch kurz Bescheid geben). <br/>Für Spiele und Unterhaltung ist ebenfalls gesorgt.",
    "scinfoItem3Header": "Mitbringen",
    "scinfoItem3Str1": "Wir werden die meiste Zeit im Freien verbringen. Achten Sie daher darauf, dass ihre Kinder wettergerechte Kleidung (ggf. Wechselklamotten) dabei haben. Wir hoffen, das gilt vor allem dem Sonnenschutz.",
    "scinfoItem3Str2": "Getränke bitte nur am Ausflug mitbringen (Dienstag). An allen anderen Tagen ist mit Fruchtsaft, Wasser und Tee für ausreichend Flüssigkeit gesorgt. Um das Essen kümmern wir uns an allen Tagen – auch am Ausflug.",
    "scinfoItem3Str3": "Alles, was mit unserem Thema zu tun hat, ist ebenso willkommen. Bücher und besondere Objekte sind immer eine Bereicherung. Achten Sie darauf, dass alle Gegenstände entweder mit Namen versehen sind oder kenntlich gemacht sind, sodass es zu keinen Verwechslungen kommt.",
    "scinfoItem4Header": "T-Shirts",
    "scinfoItem4Str1": "Es gibt T-Shirts zum Science Camp. Die Shirts sind fair gehandelt, haben eine gute Qualität und sind auf Schadstoffe geprüft. Wir lassen sie bei einem lokalen Anbieter bedrucken. Der Preis beträgt 8 Euro und sollte während der Freizeit bar bezahlt werden. Sie können vorbestellt werden oder noch während der Freizeit erworben werden (solange der Vorrat reicht).",
    "scinfoItem4Str2": "Die Shirts sind türkis mit dem diesjährigen Science Camp Logo. Lieferbare Größen sind 116, 128, 140, 152, 164 sowie S, M, L, XL.",
    "scinfoItem5Header": "Übernachtung",
    "scinfoItem5Str1": "Sofern es das Wetter zulässt, bieten wir für die älteren Kinder eine Übernachtung an, meist einmal in der Woche Mittwochs oder Donnerstags. Wir geben Genaueres noch rechtzeitig bekannt.",
    "scinfoItem5Str2": "Für die Übernachtung werden benötigt: Isomatte, Schlafsack und Zahnputzzeug. Darüber hinaus können Kissen, Schlafanzug, Wechselkleidung und Stofftier ganz nützlich sein. Bitte beachten Sie jedoch, dass größere Mengen an Süßigkeiten, elektrische Geräte und ähnliches eher unangebracht sind (ggf. mit Absprache).",
    "scinfoItem6Header": "Lebensmittelunverträglichkeiten/ Allergien",
    "scinfoItem6Str1": "Informieren Sie uns bitte rechtzeitig über Allergien, Besonderheiten beim Essen und falls es sonst noch etwas zu berücksichtigen gibt. Wir richten uns gerne auf alle Bedürfnisse ein, jedoch müssen wir es vorher wissen.",
    "scinfoItem6Str2": "Wie immer versuchen wir lokale Bezugsquellen für hochwertige Lebensmittel zu finden.",
    "scinfoItem7Header": "Fotos",
    "scinfoItem7Str1": "Auch in diesem Jahr werden wir in der Freizeit Fotos machen. Diese sind zunächst nach der Freizeit auf dieser Seite mit einem Passwort zugänglich.",
    "scinfoItem7Str2": "Wir werden zudem auch einige Bilder veröffentlichen und ggf. weiterverwenden. Bitte geben Sie uns Bescheid, wenn einzelne Kinder nicht abgebildet werden sollen.",
    //Science Camp Anmeldung
    "scanmeldungHeader": "Science Camp 2018 - Anmeldung",
    "scanmeldungItem1Str1": "Zur Anmeldung füllen Sie bitte dieses Formular aus. Sind die Daten erfolgreich bei uns eingegangen, wird eine automatische EMail an die angegebene Adresse verschickt. Aktualisieren Sie dazu ggf. ihren EMail-Ordner. <br><i>Wir freuen uns, dass das Interesse am Science Camp so groß ist. Leider sind bereits alle Plätze voll. Wir schreiben alle weiteren Anmeldungen auf eine Warteliste und melden uns, falls noch ein Platz frei wird.</i>",
    "scanmeldungItem1Str2": "Vor der Freizeit versenden wir nochmals detaillierte Informationen zu Details, sowie der Bezahlung des Freizeitbeitrages. Bei Fragen sind wir selbstverständlich erreichbar (<a href=\"/kontakt.html\">Kontakt</a>). Die Anmeldung ist zunächst bis <b>15. Mai</b> freigeschaltet.",
    //Science Camp Bilder
    "scphotosHeader": "Bilder Science Camp",
    "scphotosStr": "Auf dieser Seite befinden sich alle Bilder vom Science Camp 2017. Auf diese Seite haben nur die Eltern der Teilnehmer sowie unser Betreuerteam Zugriff. Sie können die Bilder gerne für Ihren privaten Gebrauch einzeln oder als Archiv herunterladen. Wir werden einige Bilder veröffentlichen. Sollten Sie mit der Veröffentlichung einzelner Bilder, auf denen Ihre Kinder zu sehen sind, nicht einverstanden sein, teilen Sie uns dies bitte per Mail mit.",
    "scphotosWeek1Header": "Woche 1",
    "scphotosWeek2Header": "Woche 2",
    //Werwolf Camp
    "wcHeader": "Werwolf Camp",
    "wcItem1Str": "...unweit des Düsterwalds liegt seit uralter Zeit ein Dorf. Das Leben ging seinen gewohnten Gang, bis eines Tages ein uralter Schatten zurückkehrte ...",
    "wcItem2Str1": "Nach einem erfolgreichen ersten Werwolf-Camp geht es in die zweite Runde. Es geht natürlich wieder um das Spiel: <b>Werwolf</b>. Dabei wollen wir nicht nur die klassische Runden spielen, sondern sämtliche Erweiterungen mitbringen. Entdeckt die Fähigkeiten des Urwolfs, des \"Alten\", des Wolfkindes, ...",
    "wcItem2Str2": "Alle, die noch nie das Werwolfspiel gespielt haben, werden es kennen (und lieben ;) ) lernen. Daneben machen wir uns zwei schöne Tage mit Spiel und Spaß, leckerem Essen und witzigen Aktionen! Dieses mal in Stetten ob Lontal.",
    "wcItem3Header": "Wo",
    "wcItem3Str": "Das Werwolf Camp findet im Ferienhaus in Stetten ob Lontal statt. Das Gebäude ist bestens ausgestattet und verfügt über genügend Betten. Außerdem haben wir viel Platz zum Werwolf spielen, unter anderem im gemütlichen Kellerraum.",
    "wcItem4Header": "Wann",
    "wcItem4Str": "Das Programm geht von Donnerstagnachmittag <b>03.01.</b> bis Samstagnachmittag <b>05.01.2018</b>.",
    "wcItem5Header": "Wer",
    "wcItem5Str": "Das Teilnehmeralter ist begrenzt auf <b>10 bis 16 Jahre</b>.<br> Die Teilnehmerzahl ist aufgrund der Bettenanzahl begrenzt und kann von uns daher auch nicht flexibel gehandhabt werden.",
    "wcItem6Header": "Kosten",
    "wcItem6Str": "Der Teilnehmerbeitrag beträgt 59€, dieser beinhaltet die Fahrt ab Geislingen, Übernachtung, Verpflegung und Programm.",
    "wcItem7Header": "Anmelden",
    "wcItem7Str1": "Die Anmeldung erfolgt über dieses <a href=\"anmeldung.html\">Online-Formular</a>. Sollten Sie Fragen haben, können Sie uns über diese EMailadresse erreichen.",
    "wcItem7StrFull": "Es sind bereits alle Plätze belegt, eine Anmeldung ist nicht mehr möglich. Sollten Sie Fragen haben, können Sie uns über diese EMailadresse erreichen.",
    "wcItem7Mail": "kontakt@educatweb.de",
    "wcItem8Header": "Lebensmittelunverträglichkeiten/ Allergien",
    "wcItem8Str": "Informieren Sie uns bitte rechtzeitig über Allergien, Besonderheiten beim Essen und falls es sonst noch etwas zu berücksichtigen gibt. Wir richten uns gerne auf alle Bedürfnisse ein, jedoch müssen wir es vorher wissen.",
    "wcItem9Header": "Mitbringen",
    "wcItem9Str1": "Wir melden uns rechtzeitig, was alles mitgebracht werden muss.",
    "wcItem9StrInfomail": "Weitere Informationen haben wir per EMail an alle Teilnehmer verschickt.",
    "wcItem10Header": "Fotos",
    "wcItem10Str1": "Wir werden wieder viele Fotos machen. Diese sind zunächst nach der Freizeit auf dieser Seite mit einem Passwort zugänglich.",
    "wcItem10Str2": "Wir werden zudem auch einige Bilder veröffentlichen und ggf. weiterverwenden. Bitte geben Sie uns Bescheid, wenn einzelne Kinder nicht abgebildet werden sollen.",
    //Werwolf Camp Anmeldung
    "wcanmeldungHeader": "Werwolf Camp 2019 - Anmeldung",
    "wcanmeldungItem1Str1": "Zur Anmeldung füllen Sie bitte dieses Formular aus. Sind die Daten erfolgreich bei uns eingegangen, wird eine automatische EMail an die angegebene Adresse verschickt. Die Anmeldung ist zunächst bis 15. November möglich.",
    "wcanmeldungItem1Str2": "Vor der Freizeit versenden wir nochmals detaillierte Informationen zu Details, sowie der Bezahlung des Freizeitbeitrages. Bei Fragen sind wir selbstverständlich erreichbar (<a href=\"/kontakt.html\">Kontakt</a>).",
}



var resElements = document.querySelectorAll("[data-res]");
for (var i = 0; i < resElements.length; i++) {
    var resElement = resElements[i];
    var resKey = resElement.getAttribute("data-res");
    if (resKey) {
        for (var key in resources) {
            if (key.indexOf(resKey) == 0) {
                resElement.innerHTML = resources[key];
            }
        }
    }
}
$(document).foundation();


var form = document.getElementById("signup");
if (form != null) {
    form.addEventListener("submit", submitSignup, false);
    var moreSignup = document.getElementById("moreSignup");
    moreSignup.removeEventListener("click", addSignupFieldOC);
    moreSignup.addEventListener("click", addSignupFieldOC);
    var numberOfAdds = 0;
}

var form = document.getElementById("signupFr");
if (form != null) {
    form.addEventListener("submit", submitSignupFr, false);
    var moreSignup = document.getElementById("moreSignup");
    moreSignup.removeEventListener("click", addSignupFieldOC);
    moreSignup.addEventListener("click", addSignupFieldOC);
    var numberOfAdds = 0;
}

var formNews = document.getElementById("newsletter");
if (formNews != null) {
    formNews.addEventListener("submit", newsletterSignup, false);
}



$('.slide-container').on('setPosition', function () {
    resizeSlickSlider();
});

$(document).ready(function() {
    setTimeout(function () {
        if ($(window).width() > 640) { //if not grid-stacked
            var navHeight = $("#navContainer").height();
        }
        else {
            var navHeight = $(".title-bar").height();
        }
        if (navHeight != 0) {
            $("#mainInnerContainer").css("padding-top", navHeight);
        }
    }, 100);
    setTimeout(function () {
        if ($(window).width() > 640) { //if not grid-stacked
            var navHeight = $("#navContainer").height();
        }
        else {
            var navHeight = $(".title-bar").height();
        }
        if (navHeight != 0) {
            $("#mainInnerContainer").css("padding-top", navHeight);
        }
    }, 2000);

    //check if exist
    if ($(".slickSc17").length) {
        addPhotosToSlider();
    }

    //check if exist
    if ($("#forwardEventArchive").length) {
        setTimeout(function () { location.href = "archiv.html" }, 0);
    }
});
$(document).foundation();

$(window).resize(function () {
    if ($(window).width() > 640) { //if not grid-stacked
        var navHeight = $("#navContainer").height();
    }
    else {
        var navHeight = $(".title-bar").height();
    }
    $("#mainInnerContainer").css("padding-top", navHeight);
    resizeSlickSlider();
});

function addPhotosToSlider() {
    $.get("sc17Photos/Woche1/", function (data) {
        var photos = $(".photos1");
        var newPhotoUl = document.createElement("ul");
        var imgs = new Array();
        $(data).find("td > a").each(function () {
            imgs.push($(this).attr("href"));
        });

        for (var i = 1; i < imgs.length; i++) {
            var newPhotoLi = document.createElement("li");
            var newPhoto = document.createElement("img");
            newPhoto.setAttribute("src", "sc17Photos/Woche1/" + imgs[i]);
            newPhotoLi.append(newPhoto);
            newPhotoUl.append(newPhotoLi);
        }
        photos.append(newPhotoUl);

        $(".photos1").tiksluscarousel({
            width: 1000,
            height: 500,
            nav: 'thumbnails',
            current: 1,
            type: 'slide',
            autoplayInterval: 10000
        });
        /*$('.photos1').slick({
            "slidesToShow": 2,
            "slidesToScroll": 1,
            "focusOnSelect": true,
            "infinite": false,
            "adaptiveHeight": true
        });*/
    });

    $.get("sc17Photos/Woche2/", function (data) {
        var photos = $(".photos2");
        var newPhotoUl = document.createElement("ul");
        var imgs = new Array();
        $(data).find("td > a").each(function () {
            imgs.push($(this).attr("href"));
        });

        for (var i = 1; i < imgs.length; i++) {
            var newPhotoLi = document.createElement("li");
            var newPhoto = document.createElement("img");
            newPhoto.setAttribute("src", "sc17Photos/Woche2/" + imgs[i]);
            newPhotoLi.append(newPhoto);
            newPhotoUl.append(newPhotoLi);
        }
        photos.append(newPhotoUl);

        $(".photos2").tiksluscarousel({
            width: 1000,
            height: 500,
            nav: 'thumbnails',
            current: 1,
            type: 'slide',
            autoplayInterval: 10000
        });
        /*$('.slickphotos2').slick({
            "slidesToShow": 2,
            "slidesToScroll": 1,
            "focusOnSelect": true,
            "infinite": false,
            "adaptiveHeight": true
        });*/
    });
}

function addSignupField() {
    var container = document.getElementById("moreInputContainer");
    numberOfAdds++;
    var newElement = document.getElementById("dataInputChild").cloneNode(true);
    newElement.id = "";
    for (var i = 0; i < 3; i++) {
        var subElement = newElement.children[i].children[1];
        var inputElement = document.createElement("input");
        inputElement.type = subElement.type;
        inputElement.name = subElement.name + numberOfAdds;
        inputElement.placeholder = subElement.placeholder;
        newElement.children[i].removeChild(subElement);
        newElement.children[i].appendChild(inputElement);
    }
    var subElementG = newElement.children[3].children[1];
    var selectElementG = document.createElement("select");
    selectElementG.name = subElementG.name + numberOfAdds;
    selectElementG.appendChild(subElementG.children[0]);    //this is a move, not a copy!
    selectElementG.appendChild(subElementG.children[0]);
    newElement.children[3].removeChild(subElementG);
    newElement.children[3].appendChild(selectElementG);

    var newShirtElement = document.getElementById("dataInputThsirt").cloneNode(true);
    newShirtElement.id = "";
    var subElement = newShirtElement.children[1];
    var selectElement = document.createElement("select");
    selectElement.name = subElement.name + numberOfAdds;
    selectElement.appendChild(subElement.children[0]);  //this is a move, not a copy!
    selectElement.appendChild(subElement.children[0]);
    newShirtElement.removeChild(subElement);
    newShirtElement.appendChild(selectElement);

    var newWeekElement = document.getElementById("dataInputWeek").cloneNode(true);
    newWeekElement.id = "";
    var subElement1 = newWeekElement.children[1];
    var subElement1Label = newWeekElement.children[2];
    var subElement2 = newWeekElement.children[4];
    var subElement2Label = newWeekElement.children[5];
    var subElementBr = newWeekElement.children[3];
    var inputElement1 = document.createElement("input");
    var inputElement1Label = document.createElement("label");
    var inputElement2 = document.createElement("input");
    var inputElement2Label = document.createElement("label");
    inputElement1.type = subElement1.type;
    inputElement1.name = subElement1.name + numberOfAdds;
    inputElement1Label.for = subElement1Label.for;
    inputElement1Label.innerHTML = subElement1Label.innerHTML;
    inputElement2.type = subElement2.type;
    inputElement2.name = subElement2.name + numberOfAdds;
    inputElement2Label.for = subElement2Label.for;
    inputElement2Label.innerHTML = subElement2Label.innerHTML;
    newWeekElement.removeChild(subElement1);
    newWeekElement.removeChild(subElement1Label);
    newWeekElement.removeChild(subElement2);
    newWeekElement.removeChild(subElement2Label);
    newWeekElement.removeChild(subElementBr);
    newWeekElement.appendChild(inputElement1);
    newWeekElement.appendChild(inputElement1Label);
    newWeekElement.appendChild(subElementBr);
    newWeekElement.appendChild(inputElement2);
    newWeekElement.appendChild(inputElement2Label);

    var newShirtElementRow = document.createElement("div");
    var newEmptyElementColumn = document.createElement("div");
    newEmptyElementColumn.setAttribute("class", "large-7 small-12 columns");
    newShirtElementRow.setAttribute("class", "row");
    newShirtElementRow.appendChild(newShirtElement);
    newShirtElementRow.appendChild(newWeekElement);
    newShirtElementRow.appendChild(newEmptyElementColumn);

    container.appendChild(newElement);
    container.appendChild(newShirtElementRow);
}

function addSignupFieldOC() {
    var container = document.getElementById("moreInputContainer");
    numberOfAdds++;
    var newElement = document.getElementById("dataInputChild").cloneNode(true);
    newElement.id = "";
    for (var i = 0; i < 3; i++) {
        var subElement = newElement.children[i].children[1];
        var inputElement = document.createElement("input");
        inputElement.type = subElement.type;
        inputElement.name = subElement.name + numberOfAdds;
        inputElement.placeholder = subElement.placeholder;
        newElement.children[i].removeChild(subElement);
        newElement.children[i].appendChild(inputElement);
    }
    var subElementG = newElement.children[3].children[1];
    var selectElementG = document.createElement("select");
    selectElementG.name = subElementG.name + numberOfAdds;
    selectElementG.appendChild(subElementG.children[0]);    //this is a move, not a copy!
    selectElementG.appendChild(subElementG.children[0]);
    newElement.children[3].removeChild(subElementG);
    newElement.children[3].appendChild(selectElementG);

    container.appendChild(newElement);
}

function submitSignup(event) {
    event.preventDefault();

    var data = getSignupData(0);

    //check if shuttle and earlybird is checked together
    /*if (!validShuttleEarly(data.shuttle, data.fruehbetreuung)) {
        if (document.getElementById("checkboxInvalid").classList.contains('hidden')) {
            document.getElementById("checkboxInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("checkboxInvalid").classList.contains('hidden')) {
            document.getElementById("checkboxInvalid").classList.add('hidden');
        }
    }*/

    //check if mail is valid (most browsers check this by themself already)
    if (!validEmail(data.mail)) {
        if (document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.add('hidden');
        }
    }

    //send mail and send data to google doc
    {
        var i = 1;
        while (data.hasOwnProperty('name' + i)) {
            i++;
        }
        var numberOfChildren = i;
        
        var children = data.name;

        for (var i = 1; i < numberOfChildren; i++) {
            children += " und " + data['name' + i];
        }

        $.post("sendMail.php",
        {
            mail: data.mail,
            subject: 'Anmeldung Ostercamp',
            text: 'Guten Tag,\n\ndie Anmeldung für das Ostercamp 2019 für ' + children + ' ist bei uns eingegangen. Wir werden uns noch mit weiteren Informationen vor Beginn der Freizeit per E-Mail melden.\n\nViele Grüße,\ndas Educat Team'
        },
        function () { });

        var url = event.target.action;
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
            console.log(request.status, request.statusText)
            console.log(request.responseText);
            if (!document.getElementById("signup").classList.contains('hidden')) {
                document.getElementById("signup").classList.add('hidden');
            }
            if (!document.getElementById("signupClicked").classList.contains('hidden')) {
                document.getElementById("signupClicked").classList.add('hidden');
            }
            if (document.getElementById("signupFinished").classList.contains('hidden')) {
                document.getElementById("signupFinished").classList.remove('hidden');
            }
            return;
        };

        var encoded = Object.keys(data).map(function (m) {
            return encodeURIComponent(m) + "=" + encodeURIComponent(data[m])
        }).join("&")
        request.send(encoded);
        if (!document.getElementById("signup").classList.contains('hidden')) {
            document.getElementById("signup").classList.add('hidden');
        }
        if (document.getElementById("signupClicked").classList.contains('hidden')) {
            document.getElementById("signupClicked").classList.remove('hidden');
        }
    }
}

function submitSignupFr(event) {
    event.preventDefault();

    var data = getSignupDataFr(0);

    //check if mail is valid (most browsers check this by themself already)
    if (!validEmail(data.mail)) {
        if (document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.add('hidden');
        }
    }

    //send mail and send data to google doc
    {
        var i = 1;
        while (data.hasOwnProperty('name' + i)) {
            i++;
        }
        var numberOfChildren = i;
        
        var children = data.name;

        for (var i = 1; i < numberOfChildren; i++) {
            children += " und " + data['name' + i];
        }

        $.post("sendMail.php",
        {
            mail: data.mail,
            subject: 'Inscription Ostercamp',
            text: 'Bonjour,\n\nl’inscription pour le camp 2019 pour ' + children + ' a bien été prise en compte. Nous vous contacterons par mail, pour des informations supplémentaires, avant le début de la rencontre.\n\nCordialement,\nl’équipe Educat.'
        },
        function () { });

        var url = event.target.action;
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
            console.log(request.status, request.statusText)
            console.log(request.responseText);
            if (!document.getElementById("signupFr").classList.contains('hidden')) {
                document.getElementById("signupFr").classList.add('hidden');
            }
            if (!document.getElementById("signupClicked").classList.contains('hidden')) {
                document.getElementById("signupClicked").classList.add('hidden');
            }
            if (document.getElementById("signupFinished").classList.contains('hidden')) {
                document.getElementById("signupFinished").classList.remove('hidden');
            }
            return;
        };

        var encoded = Object.keys(data).map(function (m) {
            return encodeURIComponent(m) + "=" + encodeURIComponent(data[m])
        }).join("&")
        request.send(encoded);
        if (!document.getElementById("signupFr").classList.contains('hidden')) {
            document.getElementById("signupFr").classList.add('hidden');
        }
        if (document.getElementById("signupClicked").classList.contains('hidden')) {
            document.getElementById("signupClicked").classList.remove('hidden');
        }
    }
}

function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validShuttleEarly(shuttle, early) {
    if (shuttle && early) {
        return false;
    }
    return true;
}

function getSignupData(type) {
    if (type == 0)
        var inputElements = document.getElementById("signup").elements;
    else if(type == 1)
        var inputElements = document.getElementById("newsletter").elements;

    var inputFields = Object.keys(inputElements).map(function (m) {
        if (inputElements[m].name !== undefined) {
            return inputElements[m].name;
        }
        else if (inputElements[m].length > 0) {
            return inputElements[m].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var data = {};
    inputFields.forEach(function (m) {
        data[m] = inputElements[m].value;
        if (inputElements[m].type === "checkbox") {
            data[m] = inputElements[m].checked;
        }
        else if (inputElements[m].length) {
            for (var i = 0; i < inputElements[m].length; i++) {
                if (inputElements[m].item(i).checked) {
                    data[m] = inputElements[m].item(i).value;
                }
            }
        }
    });

    return data;
}

function getSignupDataFr(type) {
    if (type == 0)
        var inputElements = document.getElementById("signupFr").elements;
    else if(type == 1)
        var inputElements = document.getElementById("newsletter").elements;

    var inputFields = Object.keys(inputElements).map(function (m) {
        if (inputElements[m].name !== undefined) {
            return inputElements[m].name;
        }
        else if (inputElements[m].length > 0) {
            return inputElements[m].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var data = {};
    inputFields.forEach(function (m) {
        data[m] = inputElements[m].value;
        if (inputElements[m].type === "checkbox") {
            data[m] = inputElements[m].checked;
        }
        else if (inputElements[m].length) {
            for (var i = 0; i < inputElements[m].length; i++) {
                if (inputElements[m].item(i).checked) {
                    data[m] = inputElements[m].item(i).value;
                }
            }
        }
    });

    return data;
}

function newsletterSignup(event) {
    event.preventDefault();

    var data = getSignupData(1);

    //check if mail is valid (most browsers check this by themself already)
    if (!validEmail(data.mail)) {
        if (document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.remove('hidden');
            return false;
        }
    } else {
        if (!document.getElementById("mailInvalid").classList.contains('hidden')) {
            document.getElementById("mailInvalid").classList.add('hidden');
        }
    }

    var url = event.target.action;
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        console.log(request.status, request.statusText)
        console.log(request.responseText);
        if (!document.getElementById("newsletter").classList.contains('hidden')) {
            document.getElementById("newsletter").classList.add('hidden');
        }
        if (!document.getElementById("signupClicked").classList.contains('hidden')) {
            document.getElementById("signupClicked").classList.add('hidden');
        }
        if (document.getElementById("signupFinished").classList.contains('hidden')) {
            document.getElementById("signupFinished").classList.remove('hidden');
        }
        return;
    };

    var encoded = Object.keys(data).map(function (m) {
        return encodeURIComponent(m) + "=" + encodeURIComponent(data[m])
    }).join("&")
    request.send(encoded);
    if (!document.getElementById("newsletter").classList.contains('hidden')) {
        document.getElementById("newsletter").classList.add('hidden');
    }
    if (document.getElementById("signupClicked").classList.contains('hidden')) {
        document.getElementById("signupClicked").classList.remove('hidden');
    }
}

function resizeSlickSlider() {
    $slickSlider = $('.slide-container');
    $slickSlider.find('.slick-slide').height('auto');

    var slickTrack = $slickSlider.find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();

    $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
}

function connectToDB() {
    event.preventDefault();
    var data = getSignupData(0);

    $.post("db.php",
        {
            username: data.username,
            password: data.password
        },
        function (data) {
            
        });
}