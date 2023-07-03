import { FilterType, ListOrder } from "@/Context/filterContext";

export const ApplyFilter = (filter: FilterType): string => {
  switch(filter){
    case FilterType.Agency:
     return `filter: {category: "agencies"}`;
    case FilterType.Chatbot:
      return `filter: {category: "chatbot"}`;
    case FilterType.DigitalMarketing:
      return `filter: {category: "digital_marketing"}`;
    case FilterType.LeadGeneration:
      return `filter: {category: "lead_generation"}`
    case FilterType.PaidMedia:
      return `filter: {category: "paid_media"}`;
    default: 
      return ``;
  }
}

export const ApplyOrder = (order: ListOrder): string => {
  switch(order){
    case ListOrder.DateAsc:
      return `sortField: "crated_at", sortOrder: "ASC"`;
    case ListOrder.DateDesc:
      return `sortField: "crated_at", sortOrder: "DES"`;
    case ListOrder.LessView:
      return `sortField: "views", sortOrder: "ASC"`;
    case ListOrder.MostView:
      return `sortField: "views", sortOrder: "DES"`;
    default:
      return ``
  }
}