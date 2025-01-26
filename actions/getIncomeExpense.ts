"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getIncomExpense(): Promise<{ income?: number; expense?: number; error?: string }> {
  const { userId } = await auth();
  if (!userId) return { error: "User Not Found!" };

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });

    const amounts = transactions.map((t) => t.amount);

    const income = amounts.filter((a) => a > 0).reduce((acc, item) => acc + item, 0);
    const expense = amounts.filter((a) => a < 0).reduce((acc, item) => acc + item, 0);

    return { income, expense : Math.abs(expense) };
  } catch (err) {
    return { error: "Database Error!" };
  }
}

export default getIncomExpense;
