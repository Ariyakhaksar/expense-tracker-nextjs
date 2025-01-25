"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}
interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function AddTransactionAction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  //check for input values
  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or Amount is missing" };
  }

  const text: string = textValue.toString(); //Ensuer text is a string
  const amount: number = parseFloat(amountValue.toString());

  // Get logged in user
  const { userId } = await auth();
  if (!userId) return { error: "User Not Found!" };

  // Create Transcation
  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath('/')

    return { data: transactionData };
  } catch (err) {
    return { error: "Transaction Not Added" };
  }
}

export default AddTransactionAction;
