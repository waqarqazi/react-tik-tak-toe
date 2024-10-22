import { db } from 'services';

export const getPositionById = async (positionId) => {
  const response = await db.collection('Positions').doc(positionId).get();
  const data = response.data();
  return data;
};
export const getClientById = async (clientId) => {
  const response = await db.collection('Clients').doc(clientId).get();
  const data = response.data();

  return data;
};
