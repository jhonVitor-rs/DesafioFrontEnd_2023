import { FilterType, ListOrder } from "@/Context/filterContext";

export const ApplyFilter = (filter: FilterType): string => {
  switch(filter){
    case FilterType.Agency:
     return `category: "agencies"`;
    case FilterType.Chatbot:
      return `category: "chatbot"`;
    case FilterType.DigitalMarketing:
      return `category: "digital_marketing"`;
    case FilterType.LeadGeneration:
      return `category: "lead_generation"`;
    case FilterType.PaidMedia:
      return `category: "paid_media"`;
    default: 
      return ``;
  }
}

export const ApplyOrder = (order: ListOrder): string => {
  switch(order){
    case ListOrder.DateAsc:
      return `sortBy: "crated_at", sortOrder: "ASC"`;
    case ListOrder.DateDesc:
      return `sortBy: "crated_at", sortOrder: "DES"`;
    case ListOrder.LessView:
      return `sortBy: "views", sortOrder: "ASC"`;
    case ListOrder.MostView:
      return `sortBy: "views", sortOrder: "DES"`;
    default:
      return ``
  }
}