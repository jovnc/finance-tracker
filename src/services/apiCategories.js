import supabase, { supabaseUrl } from "./supabase";

export async function addCategory({
  newCategoryName,
  backgroundColor,
  textColor,
  status,
}) {
  const userid = (await supabase.auth.getUser()).data.user.id;

  const { data, error } = await supabase
    .from("categories")
    .insert([
      {
        categoryName: newCategoryName,
        userid: userid,
        backgroundColor: backgroundColor,
        textColor: textColor,
        status: status,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function removeCategory() {}

export async function getCategories() {
  let { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return categories;
}
export async function getCategoriesById({ categoryId }) {
  let { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return categories;
}
