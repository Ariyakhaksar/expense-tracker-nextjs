"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(T_ID: string): Promise<{ message?: string; error?: string }> {
  const { userId } = await auth();
  if (!userId) return { error: "User Not Found!" };

  try {
    await db.transaction.delete({
      where: {
        id: T_ID,
        userId,
      },
    });
    revalidatePath("/");

    return { message: "Transaction deleted!" };
  } catch (err) {
    return { error: "Database Error!" };
  }
}

export default deleteTransaction;
