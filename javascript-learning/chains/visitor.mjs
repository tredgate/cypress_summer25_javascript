import { EntryHall } from "./entry_hall.mjs";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se máte?")
  .entryBathroom()
  .washHands()
  .washHands()
  .returnToEntryHall();
