<script setup lang="ts">
const files = {
  zertifikat: "/docs/bootcamp.pdf",
  aeb: "/docs/aeb.pdf",
  sapiens: "/docs/sapiens.pdf",
};

let dialogCloseEventListener: any = null;

function openPdf(e: Event) {
  const input = e.target as HTMLElement;
  if (!input.textContent) return null;

  const path = findMatchingPdfPath(input.textContent.toLowerCase());

  if (!path) return null;

  const dialog = document.querySelector("dialog");
  const pdfFrameWrapper = document.querySelector("dialog")?.firstChild;
  dialog?.showModal();

  const pdfFrame = document.createElement("iframe");
  pdfFrame.id = "pdfFrame";
  pdfFrame.src = path;
  pdfFrame.classList.add("pdf-frame");
  pdfFrameWrapper?.appendChild(pdfFrame);
}

function findMatchingPdfPath(name: string): null | string {
  const filePath = Object.entries(files).filter((f) => f[0] === name)[0][1];
  if (!filePath) return null;
  return filePath;
}

function closePdf() {
  const dialog = document.querySelector("dialog");
  const oldPdf = document.getElementById("pdfFrame");
  oldPdf && oldPdf.remove();
  dialog?.close();
}

onMounted(() => {
  const dialog = document.querySelector("dialog");

  dialogCloseEventListener = dialog?.addEventListener("click", (e) => {
    const dialogDims = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDims.left ||
      e.clientX < dialogDims.right ||
      e.clientY < dialogDims.top ||
      e.clientY < dialogDims.bottom
    ) {
      closePdf();
    }
  });
});

onUnmounted(() => {
  const dialog = document.querySelector("dialog");
  dialog?.removeEventListener("click", dialogCloseEventListener);
});
</script>

<template>
  <Header />
  <h3>Beruflicher Werdegang</h3>

  <section>
    <article>
      <h4>Vorabinfo</h4>
      <p>
        Mit 16 Jahren habe ich mich bewusst dazu entschieden das Gymnasium mit
        Mittlerer Reife zu verlassen und eine Ausbildung zum Speditionskaufmann
        zu beginnen. Diese Entscheidung war vor allen Dingen dadurch bedingt,
        dass ich nach der Schule und in den Sommerferien bereits bei einer
        Spedition Aushilfstätigkeiten übernommen hatte und dadurch meine
        Leidenschaft zur Abreit entdeckt habe. Ich wollte zu diesem Zeitpunkt in
        meinem Leben nicht studieren sondern direkt in die Arbeitswelt
        einsteigen. <br />
        Nach der Ausbildung habe ich zunächst in meinem Ausbildungsbetrieb
        gearbeitet bevor ich dann 2006 von NRW nach Hamburg gezogen bin um
        fortan im Hamburger Hafen zu arbeiten. Dies sollte für die nächsten 15
        Jahre meine Welt sein.
      </p>
      <p>
        Obwohl ich den Job der Hafenlogistik sehr gemocht habe kam im Jahr 2019
        das Gefühl und später auch der Entschluss, dass ich nochmal etwas
        anderes in meinem Berufsleben ausprobieren wollte. Da ich seit meiner
        Kindheit leidenschaftlicher Computerfan bin und mich privat sehr viel
        damit beschäftigt habe inkl. verschiedener Programmier- und
        Scriptsprachen fiel mein Augenmerk sehr schnell auf diesen Bereich.
        Zunächst dachte ich, dass man ohne Studium keine Chance hat, aber dann
        erfuhr ich, dass es einen Fachkräftemangel gibt und auch Quereinsteiger
        eine Chance haben. <br />
        Der Entschluss war gefasst, allerdings hat es noch bis 2021 gedauert bis
        ich genug Geld auf Seite geschafft hatte um ein privat finanziertes Web
        Development Bootcamp sowie einige Monat Verdienstausfall zu
        finanzieren.<br />
        Ich habe das Bootcamp erfolgreich abgeschlossen (siehe:
        <strong class="pdf-link" @click="openPdf($event)">Zertifikat</strong>)
        und arbeite nun seit Frühjahr 2022 als Entwickler.
      </p>
    </article>
    <article>
      <h4>CV</h4>
      <div></div>
    </article>
  </section>
  <dialog>
    <div class="pdf-frame-wrapper"></div>
  </dialog>
</template>

<style lang="css" scoped>
article {
  margin-top: 3rem;
}

dialog {
  border: none;
  background-color: var(--main-text-color);
  border-radius: 0.3rem;
  margin: auto;
  padding: 0;
  width: 90vw;
  height: 90vh;
}

dialog::backdrop {
  background-color: hsl(204.4, 42.4%, 27.3%, 0.7);
}
</style>
