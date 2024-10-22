const API_URLS = {
  //AUTH CONST
  LOGIN: '/users/login',
  SIGNUP: '/users',
  VALIDATE_OTP: '/secure/api/auth/validateotp',
  INIT_PWD: '/secure/api/auth/initfrgtpwd',
  CHNG_PWD: '/secure/api/auth/chngpwd',
  ADD_USER_STRAT: '/user-strategies',
  GET_ALL_STRATAGIES: '/strategies',
  START_BOT: '/user-strategies/start-bot',
  // USER: "/users",
  // GET_ROLE: "/users/get-role",
  // CHANGE_PASSWORD: "/users/update-password",
  // FORGOT_PASSWORD: "/users/forget-password",
  // RESET_PASSWORD: "/users/change-password",

  //TASKS
  GET_TASKS: '/secure/api/task/searchall',
  SEARCH_TASKS_BY_ID: '/secure/api/task/search',
  GET_TASKS_DASHBOARD: '/secure/api/task/dashboard',
  CREATE_TASK: '/secure/api/task/add',
  AMEND_TASK: '/secure/api/task/update',
  SEARCH_ALLOC_OFF_TASK: '/secure/api/task/searchallocateofcr',
  ALLOC_OFF_PER_TASK: '/secure/api/task/allocateofcr',
  ADD_TEAM: '/secure/api/task/invstg/team/add',
  ADD_MEMBER: '/secure/api/task/invstg/team/mbr/add',
  UPDATE_MEMBER: '/secure/api/task/invstg/team/mbr/update',
  GET_MEMBER_BY_LIST_ID: '/secure/api/task/invstg/team/search',
  ADD_SUSPECT: '/secure/api/task/invstg/spct/add',
  ADD_STATEMENT: '/secure/api/task/invstg/spct/stmt/add',
  GET_STATEMENT: '/secure/api/task/invstg/spct/search',
  ADD_EVIDENCE: '/secure/api/task/invstg/evdnc/add',

  //Witness
  ADD_WITNESS: '/secure/api/task/invstg/wtns/add',
  ADD_WITNESS_STATEMENT: '/secure/api/task/invstg/wtns/stmt/add',
  GET_STATEMENT_WITNESS: '/secure/api/task/invstg/wtns/search',

  // INTEL
  GET_INTELS: '/secure/api/intel/searchall',
  CREATE_INTEL: '/secure/api/intel/add',
  SEARCH_INTEL_BY_ID: '/secure/api/intel/search',
  AMEND_INTEL: '/secure/api/intel/update',
  INTEL_APPROVE: '/secure/api/intel/approve',
  SEARCH_ALLOC_OFF_INTEL: '/secure/api/intel/searchallocateofcr',
  ALLOC_OFF_PER_INTEL: '/secure/api/intel/allocateofcr',

  //COMMON DATA
  CREATE_COUNTRY: '/secure/api/cntry/add',
  GET_ALL_COUNTRY_DATA: '/secure/api/cntry/searchall',
  GET_COUNTRY_BY_ID: '/secure/api/cntry/search',

  GET_ALL_DISTRICT_DATA: '/secure/api/dstr/searchall',
  ADD_DISTRICT: '/secure/api/dstr/add',
  GET_DISTRICT_BY_ID: '/secure/api/dstr/search',
  GET_ORGANIZATION_LIST: '/secure/api/orgnzcls/searchall',
  GET_ORGANIZATION_BY_ID: '/secure/api/orgnzcls/search',
  ADD_ORGANIZATION: '/secure/api/orgnzcls/add',

  GET_ALL_TEAM_DATA: '/secure/api/tam/searchall',

  GET_TEAM_BY_ID: '/secure/api/tam/search',

  GET_ALL_DEPARTMENT_DATA: '/secure/api/dept/searchall',
  GET_DEPARTMENT_ID: '/secure/api/dept/search',
  ADD_DEPT: '/secure/api/dept/add',
  GET_ORGANIZATION_DETAILS_LIST: '/secure/api/orgnz/searchall',
  ADD_ORGANIZATION_DETAILS_LIST: '/secure/api/orgnz/add',
  GET_SINGLE_ORGANIZATION_DETAILS_BY_ID: '/secure/api/orgnz/search',

  //GROUP
  GET_GROUP_LIST: '/secure/api/grp/searchall',
  ADD_GROUP: '/secure/api/grp/add',
  UPDATE_GROUP: '/secure/api/grp/update',
  GET_GROUP_BY_ID: '/secure/api/grp/search',

  //ROLES
  GET_ROLES_LIST: '/secure/api/rl/searchall',
  ADD_ROLE: '/secure/api/rl/add',
  GET_ROLE_BY_ID: '/secure/api/rl/search',

  //USER MANAGEMENT
  GET_OFFICER_LIST: '/secure/api/ofcr/searchall',
  GET_OFFICER_BY_ID: '/secure/api/ofcr/search',
  ADD_OFFICER: '/secure/api/ofcr/add',
  UPDATE_OFFICER_OFFICER: '/secure/api/ofcr/update',

  //CREATE PLAN

  GET_ALL_BOTS: '/user-strategies/get-all-strats',
  SEARCH_PLAN_BY_ID: '/secure/api/plan/search',
  APPROVE_PLAN: '/secure/api/plan/approve',
  SEARCH_ALLOC_OFF: '/secure/api/plan/searchallocateofcr',
  ALLOC_OFF_PER: '/secure/api/plan/allocateofcr',
  AMEND_PLAN: '/secure/api/plan/update',

  //OFFICER
  SEARCH_OFF_BASIC: '/secure/api/ofcr/searchbasic',

  // OBJECTIVES
  SEARCH_ALL_OBJECTIVES: '/secure/api/obj/searchall',
  CREATE_OBJECTIVES: '/secure/api/obj/add',
  SEARCH_OBJ_BY_ID: '/secure/api/obj/search',
  OBJ_APPROVE: '/secure/api/obj/approve',
  AMEND_OBJ: '/secure/api/obj/update',
  SEARCH_ALLOC_OFF_OBJ: '/secure/api/obj/searchallocateofcr',
  ALLOC_OFF_PER_OBJ: '/secure/api/obj/allocateofcr',

  //GLOBAL FILE
  DOWNLOAD_FILE: '/secure/api/doc/view',
  DOWNLOAD_FILE_DETAILS: '/secure/api/doc/downloadFile/',
  VIEW_FILE: '/secure/api/doc/view',
};

export { API_URLS };
