import { db } from 'services';

export const getPostionsValues = async (sortDirection, sortBy, limit) => {
  let result;
  if (sortBy) {
    result = await db
      .collection('Attorneys')
      .orderBy(sortBy, sortDirection || 'asc')
      .limit(limit)
      .get();
  } else {
    result = await db
      .collection('Attorneys')
      .orderBy('A_Latest_LIStatus', 'asc')
      .orderBy('A_LastName', 'asc')
      .limit(limit)
      .get();
  }

  return result.docs.map((doc) => doc.data());
};
