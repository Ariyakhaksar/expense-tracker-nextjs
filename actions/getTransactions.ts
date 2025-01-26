"use server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";
import { auth } from "@clerk/nextjs/server";

async function getTransactions(): Promise<{ transactions?: Transaction[]; error?: string }> {
  const { userId } = await auth();
  if (!userId) return { error: "User Not Found!" };

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: {
        createAt: "desc",
      },
    });

    return { transactions };
  } catch (err) {
    return { error: "Database Error!" };
  }
}

export default getTransactions;
