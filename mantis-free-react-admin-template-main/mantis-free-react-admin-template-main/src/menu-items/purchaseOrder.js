// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const purchaseOrder = {
    id: 'purchaseOrder',
    title: '구매 계약',
    type: 'group',
    children: [
        {
            id: 'bidding-list',
            title: '입찰 진행 현황',
            type: 'item',
            url: '/bidding-list',
            icon: icons.FontSizeOutlined //TODO - 아이콘 변경
        },
        {
            id: 'purchase-order-list',
            title: '구매 계약 목록 조회',
            type: 'item',
            url: '/purchase-order-list',
            icon: icons.FontSizeOutlined //TODO - 아이콘 변경
        },
        {
            id: 'purchase-order',
            title: '구매 계약 등록',
            type: 'item',
            url: '/purchase-order',
            icon: icons.FontSizeOutlined //TODO - 아이콘 변경
        }
    ]
};

export default purchaseOrder;
