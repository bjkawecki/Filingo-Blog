---
layout: post
title: "Abschied von Bajkal, Ausblick auf den Nachfolger"
category: Russisch
lang: de
locale: de
page_id: abschied-bajkal
---

Ich habe die Arbeit an meiner Russisch-Sprachlernapp „Bajkal“ eingestellt. Entsprechend ist die Anwendung unter der Domain bajkal-app.de seit einigen Monaten nicht mehr erreichbar.

Beendet ist das Projekt damit jedoch nicht: Ich arbeite bereits an einem Nachfolger, zu dem ich zu einem späteren Zeitpunkt mehr sagen werde.

**Rückblick und Gründe für den Neustart**

Die Arbeit an „Bajkal“ hat mich über einen langen Zeitraum begleitet. Sie hat mir viel Spaß gemacht, und ich habe in dieser Zeit viel gelernt – konzeptuell, in der Planung, im Design und natürlich in der Programmierung. Gleichzeitig ist mir im Laufe der Entwicklung immer klarer geworden, dass ich für eine Russisch-Sprachlernapp, die meinen eigenen Vorstellungen entspricht, einen anderen, besseren Ansatz brauche.

Es gab mehrere Punkte, mit denen ich letztlich nicht zufrieden war.

Ein erster Aspekt war der Name und die visuelle Identität der App. Der Name „Bajkal“ sollte Assoziationen zur russischen Natur wecken, das Maskottchen bzw. Logo – eine Bajkal-Robbe – passte thematisch gut dazu. Insgesamt blieb der Bezug zum Sprachenlernen jedoch zu abstrakt und zu wenig selbsterklärend.

Zweitens war das Lernsystem zu starr und zu linear aufgebaut. Mein Ansatz sah vor, Vokabeln einer Lernstufe (A1, A2 usw.), einem Oberthema und einem Unterthema zuzuordnen. Die Lernstufe entsprach dabei einem Kurs, das Oberthema einem Themenbereich und das Unterthema einem Lernstapel. Das führte dazu, dass jedes Wort einem festen Lernstapel und damit auch einem festen Unterthema zugeordnet werden musste. Da Wörter jedoch selten eindeutig nur einem Thema angehören, stand ich ständig vor der Entscheidung, entweder zu allgemeine oder zu spezielle Stapelnamen zu wählen. Die Lernstapel wurden dadurch tendenziell zu groß, obwohl sie idealerweise einen überschaubaren Umfang von etwa 10 bis 20 Karten haben sollten. Mit meinem ursprünglichen Ansatz war das kaum umsetzbar. Für tausende Wörter hätten hunderte Themen definiert werden müssen. Das Ergebnis war eine sehr starre Kategorisierung, die eher zu linearem Lernmaterial wie Büchern passt. Für den Nachfolger verfolge ich daher einen vernetzten Ansatz, der besser für digitales Lernmaterial geeignet ist.

Ein weiterer Punkt war die geschlossene Struktur der App. Bei der Nutzerakquise zeigt sich, dass Menschen ungern „die Katze im Sack kaufen“. Gerade bei unbekannten Anwendungen kann bereits eine notwendige Registrierung abschreckend wirken, wenn nicht klar ist, was einen erwartet. Zwar war die Einstiegshürde bei „Bajkal“ relativ gering, dennoch möchte ich den Zugang künftig noch offener gestalten und ermöglichen, die App zunächst ganz ohne Anmeldung auszuprobieren.

Auch das Dashboard hat mich nicht mehr überzeugt. „Bajkal“ verfügte über eine Übersicht mit fälligen und neuen Lernstapeln sowie über Widgets wie einen Kalender und täglich wechselnde russische Sprichwörter mit deutscher Übersetzung. Das war grundsätzlich sinnvoll, ich möchte das Design jedoch stärker auf den Lernbereich fokussieren. Der Kalender war nett, wirkte aber letztlich etwas altbacken und ist für mich schlussendlich verzichtbar. Das Sprichwörter-Widget fand ich gelungen; möglicherweise wird es an anderer Stelle und in anderer Form wieder auftauchen.

Schließlich war auch das Datenmodell zu starr. Es hat zwar Spaß gemacht, die verschiedenen Wortarten mit all ihren Sonderfällen und Ausnahmen sauber zu modellieren. Für den Nachfolger habe ich mich jedoch für einen hybriden Ansatz aus festen Feldern und JSONB entschieden. Das führt auf der anderen Seite zu einer breiteren Data-Layer-Struktur mit strengerer Validierung der Wortdaten vor dem Import in die Datenbank.

**Bewährtes, neue Funktionen und Ausblick**

Trotz dieser Punkte gibt es viele Aspekte, die ich für das Nachfolgeprojekt beibehalten möchte. Das öffentliche Wörterbuch zum Nachschlagen von Bedeutungen und grammatischen Formen ist mir weiterhin sehr wichtig. Ich möchte hier nach wie vor eine sinnvolle Ergänzung zu bestehenden Online-Russisch-Wörterbüchern anbieten. Ebenso bleibt der Lernstapel-Ansatz mit SuperMemo-Algorithmus erhalten; abgesehen vom UI-Design sind hier kaum Änderungen geplant. Auch eine Übersicht über den Lernfortschritt wird es in der nächsten Version wieder geben.

Darüber hinaus plane ich einige neue bzw. deutlich ausgebaute Funktionen. Insbesondere möchte ich in den Bereichen Community-Building, Gamification und Benutzeranpassung nachbessern. In der nächsten Version wird es ein Ranking geben, da man fürs Lernen Punkte sammeln kann und sich mit anderen Nutzern messen kann. Auch wenn ich einer übermäßigen Gamification eher kritisch gegenüberstehe, kann sie in einem ausgewogenen Rahmen den Lernspaß erhöhen. Neben Punkten sollen auch Erfolge gesammelt werden können. Zusätzlich sollen Nutzer das Lernen stärker an ihre eigenen Bedürfnisse anpassen können – von der Farbauswahl des UI bis hin zur Definition eines täglichen Lernziels. Für absolute Anfänger ist außerdem ein kleiner Übungsbereich zum Erlernen des kyrillischen Alphabets geplant.

Das sind zunächst die wichtigsten Punkte. Es wird noch einige Zeit dauern, bis die nächste Version meiner Russisch-Lernapp veröffentlicht wird. Dieses Mal möchte ich jedoch von Beginn an mindestens die Lernstufen A1 bis B2, idealerweise sogar bis C1, abdecken. Wenn das gelungen ist und ich mit dem Ergebnis zufrieden bin, sollen anschließend auch Bereiche wie Grammatik, Hörverstehen und Hör-Seh-Verstehen folgen.