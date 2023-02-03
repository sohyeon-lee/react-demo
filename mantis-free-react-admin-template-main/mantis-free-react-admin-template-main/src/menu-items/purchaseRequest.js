// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const purchaseRequest = {
    id: 'purchase-request',
    title: '구매 신청',
    type: 'group',
    children: [
        {
            id: 'purchase-request-list',
            title: '구매 신청 현황',
            type: 'item',
            url: '/purchase-request-list',
            icon: icons.LoginOutlined //TODO - 아이콘 변경
        },
        {
            id: 'purchase-request',
            title: '구매 신청',
            type: 'item',
            url: '/purchase-request',
            icon: icons.LoginOutlined //TODO - 아이콘 변경
        },
        {
            id: 'purchase-unit',
            title: '구매 단위 편성',
            type: 'item',
            url: '/purchase-unit',
            icon: icons.LoginOutlined //TODO - 아이콘 변경
            // target: true //NOTE - 새창 띄우기
        }
    ]
};

export default purchaseRequest;
