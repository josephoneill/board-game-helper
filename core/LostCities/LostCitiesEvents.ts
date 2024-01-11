import { ExpeditionCard, ExpeditionType } from "./LostCitiesExpedition";

export type AddCardEvent = {
  card: ExpeditionCard,
  expeditionType: ExpeditionType,
};

export type RemoveCardEvent = AddCardEvent;