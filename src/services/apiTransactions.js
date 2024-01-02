import supabase, { supabaseUrl } from "./supabase";

export async function getTransactions() {
  let { data: transactions, error } = await supabase
    .from("transactions")
    .select("*, categories(*)");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return transactions;
}

export async function deleteTransaction(id) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function createEditTransaction(newTransaction, id) {
  let query = supabase.from("transactions");
  // A) CREATE
  if (!id) query = query.insert([{ ...newTransaction }]);

  // B) EDIT
  console.log(id);
  console.log(newTransaction);
  if (id) query = query.update({ ...newTransaction }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}
