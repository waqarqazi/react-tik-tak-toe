import { db } from 'services';
import moment from 'moment';

//Data Calculations - Attorneys: All Attorneys
export const dataCalculationAllAttorneys = async () => {
  const response = await db
    .collection('Attorneys')
    .where('A_End_Date', '==', null)
    .get();
  return response.docs.length;
};

//Data Calculations - Attorneys: Placed Attorneys
export const dataCalculationPlacedAttorneys = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus === 'Placed'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Unplaced Attorneys
export const dataCalculationUnPlacedAttorneys = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Pipeline' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Not Interviewing' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Interviewing' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus === 'Returned'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Pipeline Attorneys
export const dataCalculationPipelineAttorneys = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus === 'Pipeline'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Interviewing Attorneys
export const dataCalculationInterviewingAttorneys = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
        'Interviewing'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Not Interviewing Attorneys
export const dataCalculationNotInterviewingAttorney = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
        'Not Interviewing'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Converted Attorneys
export const dataCalculationConvertedAttorney = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      let totalSum = 0;
      data.A_LIStatus.forEach(({ A_LIStatus }) => {
        acc += A_LIStatus === 'Converted';
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorneys: Returned Attorneys
export const dataCalculationReturnedAttorney = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_LIStatus) {
      let totalSum = 0;
      data.A_LIStatus.forEach(({ A_LIStatus }) => {
        acc += A_LIStatus === 'Returned';
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorney: A_Previously_Placed
export const dataCalculationAttorneyPreviouslyPlaced = async (attorneyId) => {
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  const data = response.data();

  return Boolean(
    data.A_LIStatus.find(({ A_LIStatus }) => {
      return A_LIStatus === 'Placed';
    }) && data.A_LIStatus[data.A_LIStatus.length - 1].A_LIStatus !== 'Placed'
  );
};

//Data Calculations - Attorney/Training: Completed Courses
export const dataCalculationAttorneyCompletedCourses = async (attorneyId) => {
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  const data = response.data();
  let totalSum = 0;
  data.A_Training?.forEach(({ A_Course_Completed_Date }) => {
    if (A_Course_Completed_Date) totalSum += A_Course_Completed_Date != null;
  });
  return totalSum;
};

//Data Calculations - Attorneys: Active Attorneys:
export const dataCalculationActiveAttorneys = async () => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.A_C_Status) {
      if (
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Pipeline' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Not Interviewing' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus ===
          'Interviewing' ||
        data.A_LIStatus[data.A_LIStatus.length - 1]?.A_LIStatus === 'Placed'
      ) {
        acc++;
      }
    }
    return acc;
  }, 0);
};

//Data Calculations - Attorney/Training: Completed Course Hours
export const dataCalculationAttorneyCompletedCourseHours = async (
  attorneyId
) => {
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  const data = response.data();
  let totalSum = 0;
  data.A_Training?.forEach(({ A_Course_Hours }) => {
    totalSum += Number(A_Course_Hours);
  });
  return totalSum;
};

//A_BarFails Attorney By ID
export const dataCalculationBarFailsAttorneyId = async (attorneyId) => {
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  const data = response.data();
  let totalSum = 0;
  data.A_Bar?.forEach(({ A_Bar_Status }) => {
    totalSum += A_Bar_Status === 'Failed';
  });
  return totalSum;
};

//A_BarFails Attorney
export const dataCalculationBarFailsAttorney = async (attorneyId) => {
  const response = await db.collection('Attorneys').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (attorneyId) {
      if (!attorneyId.includes(data.A_ID)) {
        return;
      }
    }
    if (data.A_Bar) {
      let totalSum = 0;
      data.A_Bar.forEach(({ A_Bar_Status }) => {
        acc += A_Bar_Status === 'Failed';
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

//Total CLE Credits/Birthday
export const dataCalculationAttorneyTotalCle = async (attorneyId) => {
  const currentDate = moment();
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  const data = response.data();
  if (data.A_Training) {
    // create moment of birthDate
    const birthDate = moment(data.A_Birthdate);
    // change birthdate year to this year
    birthDate.set('year', currentDate.year());
    // compare dates in moment

    if (birthDate.toDate() >= currentDate.toDate()) {
      const yearAgo = moment(birthDate);
      yearAgo.set('year', birthDate.year() - 1);
      let totalSum = 0;
      data.A_Training.forEach(({ A_CLE_Credits, A_Course_Completed_Date }) => {
        if (A_Course_Completed_Date) {
          const completedDate = moment(A_Course_Completed_Date);
          if (completedDate.isBetween(yearAgo, birthDate)) {
            totalSum += Number(A_CLE_Credits);
          }
        }
      });
      return totalSum;
    } else {
      // console.log('YES it is before ');
      let totalSum = 0;
      data.A_Training.forEach(({ A_CLE_Credits, A_Course_Completed_Date }) => {
        if (A_Course_Completed_Date) {
          const completedDate = moment(A_Course_Completed_Date);
          if (completedDate.isBetween(birthDate, currentDate)) {
            totalSum += Number(A_CLE_Credits);
          }
        }
      });
      return totalSum;
    }
  }
};

// Live CLE Credits/Birthdate
export const dataCalculationAttorneyLiveCle = async (attorneyId) => {
  const currentDate = moment();
  const response = await db.collection('Attorneys').doc(attorneyId).get();
  if (!response.exists) {
    throw new Error('Attorney Does Not Exist');
  }
  const data = response.data();
  if (data.A_Training) {
    let totalSum = 0;
    const birthDate = moment(data.A_Birthdate, 'MM/DD/YYYY');
    birthDate.set('year', currentDate.year());
    if (birthDate.toDate() >= currentDate.toDate()) {
      const yearAgo = moment(birthDate);
      yearAgo.set('year', birthDate.year() - 1);
      data.A_Training.find(({ A_Live_Hours, A_Course_Completed_Date }) => {
        if (A_Course_Completed_Date) {
          const completeDate = moment(A_Course_Completed_Date, 'MM/DD/YYYY');
          if (completeDate.isBetween(yearAgo, birthDate)) {
            if (!isNaN(A_Live_Hours)) totalSum += Number(A_Live_Hours);
          }
        }
      });
    } else {
      data.A_Training.forEach(({ A_Live_Hours, A_Course_Completed_Date }) => {
        if (A_Course_Completed_Date) {
          const completeDate = moment(A_Course_Completed_Date, 'MM/DD/YYYY');
          if (completeDate.isBetween(birthDate, currentDate)) {
            if (!isNaN(A_Live_Hours)) totalSum += Number(A_Live_Hours);
          }
        }
      });
    }
    return totalSum;
  }
  return 0;
};

////////////////////////////////////Client Calculation////////////////////////////////////////////
//Data Calculations - Clients: Total Clients (Active)
export const dataCalculationAllActiveClients = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Status', '!=', 'Inactive')
    .get();
  return response.docs.length;
};

export const dataCalculationAllLawFirms = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Type', '==', 'Law Firm')
    .get();
  return response.docs.length;
};

//Data Calculations - Clients: Corporate (C_Type)
export const dataCalculationAllCorporates = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Type', '==', 'Corporate')
    .get();
  return response.docs.length;
};

//Data Calculations - Clients: HeadHunter (C_Type)
export const dataCalculationAllHeadHunters = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Type', '==', 'HeadHunter')
    .get();
  return response.docs.length;
};

//Data Calculations - Clients: Hybrid (C_Type)
export const dataCalculationAllHybrid = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Type', '==', 'Hybrid')
    .get();
  return response.docs.length;
};

//Data Calculations - Clients: Opportunity Positions
export const dataCalculationAllOpportunityClients = async () => {
  const clientsResponse = await db
    .collection('Clients')
    .where('C_Status', '==', 'Opportunity')
    .get();
  let sum = 0;
  for (let index = 0; index < clientsResponse.docs.length; index++) {
    sum += await dataCalculationOpenPositionById(
      clientsResponse.docs[index].id
    );
  }
  return sum;
};

//Data Calculations - Clients: C02: Placements Cumulative
export const dataCalculationPlacementQuantity = async (clientID) => {
  const response = await db.collection('Clients').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (clientID) {
      if (!clientID.includes(data.C_ID)) {
        return acc;
      }
    }
    if (data.C_Preferences) {
      let totalSum = 0;
      data.C_Preferences.forEach(({ C_Preferences_PlacementQuantity }) => {
        acc += C_Preferences_PlacementQuantity;
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

//Data Calculations - Clients: C02: Placements Cumulative (SINGLE)
export const dataCalculationPlacementQuantityById = async (clientID) => {
  const response = await db.collection('Clients').doc(clientID).get();
  const data = response.data();
  let totalSum = 0;
  data.C_Preferences?.forEach(({ C_Preferences_PlacementQuantity }) => {
    totalSum += C_Preferences_PlacementQuantity;
  });
  return totalSum;
};

//Data Calculations - Clients: C02: Placements Current
export const dataCalculationPlacementQuantityActive = async () => {
  const response = await db
    .collection('Clients')
    .where('C_Status', '==', 'Active')
    .get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.C_Preferences) {
      let totalSum = 0;
      data.C_Preferences.forEach(({ C_Preferences_PlacementQuantity }) => {
        acc += C_Preferences_PlacementQuantity;
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

//Data Calculation - placementQuantity - placed (By Id)
export const placementQuantitySubPlaced = async (clientID) => {
  const response = await db.collection('Clients').doc(clientID).get();
  const positionResponse = await db
    .collection('Postions')
    .where('C_ID', '==', clientID)
    .get();
  const data = response.data();
  const positionData = positionResponse;
  let placementQuantity = 0;
  let placedPositions = 0;
  data.C_Preferences?.forEach(({ C_Preferences_PlacementQuantity }) => {
    placementQuantity += C_Preferences_PlacementQuantity;
  });
  positionData.forEach((e) => e.data().PO_Attorneys.Status === 'Placed');
  placedPositions++;
  return placementQuantity - placedPositions;
};

// Data Calculations - Clients: C02: Open Positions
//by ID
export const dataCalculationOpenPositionById = async (clientID) => {
  const clientsResponse = await db.collection('Clients').doc(clientID).get();
  const response = await db
    .collection('Positions')
    .where('C_ID', '==', clientID)
    .get();
  let sum = 0;
  let client_sum = 0;
  const client = clientsResponse.data();
  client.C_Preferences?.forEach(({ C_Preferences_PlacementQuantity }) => {
    client_sum += C_Preferences_PlacementQuantity;
    return client_sum;
  });

  response.docs.forEach((element) => {
    const data = element.data();
    let sumForCalculation = 0;
    if (data.PO_Attorneys) {
      data.PO_Attorneys.forEach(({ Status }) => {
        if (Status === 'Placed') sumForCalculation++;
      });
      return (sum += sumForCalculation);
    }
  });
  return client_sum - sum;
};

////////////////////////////////////Positions Calculation////////////////////////////////////////////

// //Data Calculations - Positions: Open Positions
export const dataCalculationOpenPosition = async () => {
  const response = await db.collection('Positions').get();
  const clientsResponse = await db.collection('Clients').get();
  let sum = 0;

  response.docs.forEach((element) => {
    const data = element.data();
    let sum_attorneys = 0;
    const client = clientsResponse.docs
      .find((doc) => doc.data().C_ID === data.C_ID)
      ?.data();
    const preference =
      client &&
      client.C_Preferences.find(
        (pref) => pref.C_Preferences_ID === data.C_Preferences_ID
      );
    if (data.PO_Attorneys) {
      data.PO_Attorneys.forEach(({ Status }) => {
        if (Status === 'Placed') sum_attorneys++;
      });
      if (preference) {
        sum += preference.C_Preferences_PlacementQuantity - sum_attorneys;
      }
    }
  });
  return sum;
};

//Data Calculations - Positions: Placements being interviewed for
export const dataCalculationPositionsInterviewing = async () => {
  const response = await db.collection('Positions').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.PO_Attorneys) {
      for (let i = 0; i < data.PO_Attorneys.length; i++) {
        if (data.PO_Attorneys[i].Status === 'Interviewing') {
          acc++;
          break;
        }
      }
      return acc;
    }
    return acc;
  }, 0);
};

// Data Calculations - Positions: Positions Not Yet Addressed
export const dataCalculationPositionsNotAddressed = async () => {
  var sum = 0;
  let allOpportunity = await dataCalculationAllOpportunityClients();
  let allOpened = await dataCalculationOpenPosition();
  sum += allOpportunity - allOpened;
  var totalSum = sum < 0 ? sum * -1 : sum;
  return totalSum;
};

//Data Calculations - Clients: C02: Converted
export const dataCalculationConvertedPosition = async (clientId) => {
  const response = await db
    .collection('Positions')
    .where('C_ID', '==', clientId)
    .get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data.PO_Attorneys) {
      data.PO_Attorneys.forEach(({ Status }) => {
        if (Status === 'Converted') acc++;
      });
      return acc;
    }
    return acc;
  }, 0);
};

//Data Calculations - Clients: C02: Returned
export const dataCalculationReturnedPosition = async (clientId) => {
  const response = await db
    .collection('Positions')
    .where('C_ID', '==', clientId)
    .get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (data) {
      if (data.PO_Attorneys) {
        data.PO_Attorneys.forEach(({ Status }) => {
          if (Status === 'Returned') acc++;
        });
        return acc;
      }
      return acc;
    }
  }, 0);
};

//Data Calculations - Clients: C02: Interviewing
export const dataCalculationPOInterviewing = async (clientID) => {
  const response = await db
    .collection('Positions')
    .where('C_ID', '==', clientID)
    .get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();

    if (data.PO_Attorneys && data.PO_Active) {
      const isAtleastOneInterviewing = data.PO_Attorneys.find(
        ({ Status }) => Status === 'Interviewing'
      );
      isAtleastOneInterviewing && acc++;

      return acc;
    }
    return acc;
  }, 0);
};

//Placed Positions
export const dataCalculationPOPlaced = async (clientID) => {
  const response = await db.collection('Positions').get();
  return response.docs.reduce((acc, element) => {
    const data = element.data();
    if (clientID) {
      if (!clientID.includes(data.C_ID)) {
        return acc;
      }
    }
    if (data.PO_Attorneys) {
      let totalSum = 0;
      data.PO_Attorneys.forEach(({ Status }) => {
        if (Status === 'Placed') acc++;
      });
      return totalSum + acc;
    }
    return acc;
  }, 0);
};

///////////////////////////////////////////////////////////////////////////////////////////////////
export const addDummy = async () => {
  const value = await db.collection('Attorneys').add({
    ...Attorney,
  });
  await db
    .collection('Attorneys')
    .doc(value.id)
    .set({
      ...Attorney,
      A_ID: value.id,
    });
};
export const addDummyClient = async () => {
  const value = await db.collection('Clients').add({
    ...CLIENT,
  });
  await db
    .collection('Clients')
    .doc(value.id)
    .set({
      ...CLIENT,
      C_ID: value.id,
    });
};

export const addDummyPosition = async () => {
  const value = await db.collection('Positions').add({
    ...POSITION,
  });

  await db
    .collection('Positions')
    .doc(value.id)
    .set({
      ...POSITION,
      PO_ID: value.id,
    });
};

const Attorney = {
  A_FirstName: 'Michael',
  A_LastName: 'Jackson',
  A_Start_Date: '02/11/2021',
  A_End_Date: null,
  A_Law_School: 'Harvard',
  A_GPA: 3.51,
  A_Parker_Score: 9.2,
  A_Writing_Score: true,
  A_Birthdate: '01/02/1992',
  A_AmLaw200: false,
  A_Latest_LIStatus: '4Voluntary',
  A_LIStatus: [
    {
      A_LIStatus: 'Interviewing',
      A_LIStatus_Date: '07/22/2022',
    },
    {
      A_LIStatus: 'Voluntary',
      A_LIStatus_Date: '07/11/2022',
    },
  ],
  A_Class_Rank: 5,
  A_Comments: [
    {
      A_Comment: 'very good attorney',
      A_Comment_Date: '05/05/2022',
      A_Commenter: 'Bryan',
    },

    {
      A_Comment: 'can improve his writing skills',
      A_Comment_Date: '04/04/2022',
      A_Commenter: 'Jon',
    },
  ],
  A_Demo: ['Asian', 'Latinx'],
  A_Gender: 'Male',
  A_Practice_Group: ['Litigation', 'M&A'],
  A_Location: ['NY', 'DC', 'LA'],
  A_C_Status: [
    {
      A_C_Status: 'Placed',
      A_C_StatusDate: '07/22/2022',
      C_Name: 'Milbank',
    },
  ],
  A_C_Feedback: [
    {
      A_C_Feedback: 'So far so good',
      A_C_Feedback_Date: '07/26/2022',
    },
  ],
  A_Bar: [
    {
      A_Bar_Status: 'Passed',
      A_Bar_ID: '9381076',
      A_Bar_Tested_Date: '01/06/2022',
      A_Bar_State: 'NY',
    },
    {
      A_Bar_Status: 'Passed',
      A_Bar_ID: '9381456',
      A_Bar_Tested_Date: '04/05/2022',
      A_Bar_State: 'LA',
    },
  ],
  A_Training: [
    {
      A_T_ID: '39009',
      A_Course_Name: 'Intro to Lawyering',
      A_Course_Completed_Date: '06/07/2022',
      A_Course_Hours: 16,
      A_Live: false,
      A_CLE_Credits: 3,
      A_CLE_State: 'NY',
      A_CLE_Subject: 'Litigation',
      A_Course_LISubMatter: 'Litigation',
      A_Attorney_Course_Feedback: 'Taught me everything I know',
      A_LI_Course_Feedback: 'Good intro course for 1st year associates',
    },
    {
      A_T_ID: '345677',
      A_Course_Name: 'Intro to Lawyering',
      A_Course_Completed_Date: '06/06/2022',
      A_Course_Hours: 16,
      A_Live: false,
      A_CLE_Credits: 3,
      A_CLE_Stats: 'LA',
      A_CLE_Subject: 'Litigation',
      A_Course_LISubMatter: 'Litigation',
      A_Attorney_Course_Feedback: 'Taught me nothing I know',
      A_LI_Course_Feedback: 'Good intro course for 1st year associates',
    },
  ],
  A_Files: [],
  lastModified: '07/11/2022 at 09:56 AM UTC-4',
};
const CLIENT = {
  C_ID: 'umair1234',
  C_SF_Identifier: 'fb67c296be8119768f8eb01fded45d9a',
  C_Name: 'Milbank',
  C_Type: 'Corporate',
  C_Status: 'Active',
  C_AmLaw200: true,
  C_Comments: {
    A_Comment: 'Interested in taking 2 more attorneys',
    A_Comment_Date: '07/11/2022',
    A_Commenter: 'James',
  },
  C_Contact: [
    {
      C_Contact_Name: 'Jessica Rabbit',
      C_Contact_Role: 'CEO',
      C_Contact_Email: 'Jessica@Milbank.us',
      C_Contact_Phone: '555-258-6698',
    },
    {
      C_Contact_Name: 'Roger Rabbit',
      C_Contact_Role: 'CFO',
      C_Contact_Email: 'RogerR@Milbank.us',
      C_Contact_Phone: '555-811-6791',
    },
  ],
  C_History: [
    {
      C_Contract_Date_Start: '01/01/2022',
      C_Contract_Date_End: '12/31/2022',
      C_SOW_Date_Start: '07/01/2022',
      C_SOW_Date_End: '09/01/2022',
    },
  ],
  C_Preferences: [
    {
      C_Preferences_ID: '1115666',
      C_Preferences_PlacementQuantity: 4,
      C_Preferences_PracticeGroup: 'Litigation',
      C_Preferences_BarStates: ['NY', 'DC'],
      C_Preferences_Expertise: true,
    },
    {
      C_Preferences_ID: '1315666',
      C_Preferences_PlacementQuantity: 2,
      C_Preferences_PracticeGroup: 'Litigation',
      C_Preferences_BarStates: ['NY', 'aC'],
      C_Preferences_Expertise: true,
    },
  ],
  lastModified: '07/11/2022 at 07:16 PM UTC-4',
};

const POSITION = {
  PO_ID: 'bb13acdf63d0c1972b93ee32d55961bb',
  C_ID: 'yOstShtNh113aXIupKJJ',
  C_Preferences_ID: '1115666',
  PO_Attorneys: [
    {
      A_ID: '198ad29KJF902kl',
      Status: 'Placed',
      Date: '07/22/2022',
    },
    {
      A_ID: '198ad29KJF902kl',
      Status: 'Placed',
      Date: '07/22/2022',
    },
    {
      A_ID: '198ad29KJF902kl',
      Status: 'Interviewing',
      Date: '07/22/2022',
    },
    {
      A_ID: '198ad29KJF902kl',
      Status: 'Interviewing',
      Date: '07/22/2022',
    },
  ],
};
