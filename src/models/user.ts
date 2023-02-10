import { Schema, model } from "mongoose"

interface IQuotation {
  quotation_title: string
  quotationPrice: number
}

interface IUser {
  auth0Id: string
  quotations: IQuotation[]
}

const QuotationSchema = new Schema<IQuotation>({
  quotation_title: { type: String, required: false },
  quotationPrice: { type: Number, required: false },
})

const UserSchema = new Schema<IUser>({
  auth0Id: { type: String, required: true },
  quotations: { type: [QuotationSchema] },
})

export const User = model<IUser>("User", UserSchema)
