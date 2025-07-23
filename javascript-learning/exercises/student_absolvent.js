const actualPoints = 75;
const minGradPoints = 75;
const studentName = "Marie Novotná";

if (actualPoints >= minGradPoints) {
  console.log(
    `Student/ka ${studentName} prospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů`
  );
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, minimum bylo ${minGradPoints} bodů. Chybělo mu/jí ${
      minGradPoints - actualPoints
    } bodů`
  );
}
