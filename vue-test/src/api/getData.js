import axios from 'axios';

// 退出登录
export const quit = () => axios.get('/api/pc/layout/?loginCode='+loginCode);

//渠道列表
export const getchannelList = (pageNo, pageSize) => axios.get('/api/channel/getListPage?productPk='+productPk+'&loginCode='+loginCode+'&companyPk='+companyPk+'&pageNo='+pageNo+'&pageSize='+pageSize);

//渠道新增

export const channelAddEdit = (params) => axios.post('/api/channel/save?loginCode='+loginCode, params);

//渠道删除

export const channelDel = (pk) => axios.get('/api/channel/delete?loginCode='+loginCode+'&companyPk='+companyPk, { params: { channelPk: pk } });


//登录

export const register = (params) => axios.post('/api/register', params);

export const loginRegister = (params) => axios.post('/api/loginRegister', params);

export const personSave = (params) => axios.post('/api/personSave', params);
export const personList = () => axios.get('/api/personList');
export const personRemove = (params) => axios.post('/api/personRemove', params);
