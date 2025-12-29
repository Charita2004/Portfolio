import { PortfolioModule } from './types';

const PLACEHOLDER_LINK = "LINK_LARK_CUA_BAN";

export const portfolioData: PortfolioModule[] = [
  {
    id: 1,
    title: "Sổ Ghi Điểm",
    buttonLabel: "Xem chi tiết",
    buttonIconType: 'eye',
    tasks: [
      { id: "1-1", name: "Vẽ sơ đồ luồng", url: "https://njp3ijhflh4v.jp.larksuite.com/file/IHB7bXC0CouiK1xgMLljdN3wpae" },
      { id: "1-2", name: "Viết Testcase", url: "https://njp3ijhflh4v.jp.larksuite.com/sheets/WnD0sCbdWhuSEdt2NJ5jPUq2pAh" },
      { id: "1-3", name: "Soạn bộ câu hỏi Q&A", url: "https://njp3ijhflh4v.jp.larksuite.com/docx/Djk8dDIvMosT31xI0qQjAXIDpjg?from=from_copylink" },
      { id: "1-4", name: "Thiết kế giao diện Sổ tiểu học", url: "https://so-ghi-diem-tieu-hoc-quan-ly-theo-l.vercel.app/" },
      { id: "1-5", name: "Phân tích ngoại lệ (THCS & THPT)", url: "https://njp3ijhflh4v.jp.larksuite.com/docx/AC7mdkYbJon1ldxMRMRjMAwIps2?from=from_copylink" },
      { id: "1-6", name: "Test sản phẩm & Lên task thay đổi luồng/giao diện", url: "https://docs.google.com/spreadsheets/d/1fSW_Tr7REBkQYLQT-x_CZ6Twd2LFdx_mIpA_dVZEn4I/edit?gid=0#gid=0" },
      { id: "1-7", name: "Logic tính điểm & Xét lên lớp mới", url: "https://ai.studio/apps/drive/1drQiGurOgTRNL_vy2dWTLpyHumGQ55Pe?fullscreenApplet=true" },
      { id: "1-8", name: "Nhập nhận xét tự động", url: "https://docs.google.com/document/d/1X_fYdSZrCX4y5L00qmhiFLXmgfCnkuzl7V3kUMeQStw/edit?usp=sharing" },
      { id: "1-9", name: "Luồng lớp lựa chọn , tự chọn THPT", url: "https://ai.studio/apps/drive/1TROtvzfYKdFUMfSCJ8U1RJRvNJ0kF4-S?fullscreenApplet=true" },

    ],
  },
  {
    id: 2,
    title: "Sổ Theo Dõi",
    buttonLabel: "Xem tài liệu",
    buttonIconType: 'file',
    tasks: [
      { id: "2-1", name: "Vẽ sơ đồ luồng dữ liệu", url: "https://njp3ijhflh4v.jp.larksuite.com/file/LWtlbwQ4PooWsexrQ9ajBFrhpqg" },
      { id: "2-2", name: "Viết Testcase chi tiết", url: "https://njp3ijhflh4v.jp.larksuite.com/drive/folder/IYFDftDEYlc2S8dRJ7Tjpq9Rpnd" },
      { id: "2-3", name: "Soạn bộ Q&A hỗ trợ", url: "https://njp3ijhflh4v.jp.larksuite.com/docx/AWzgd9309os89YxCgA6jaf9bpx2" },
      { id: "2-4", name: "Test tính năng & Lên task dev", url: "https://docs.google.com/spreadsheets/d/1O1fMCirCj93IR4xFc5ZQO2QzeJtr_dtLMuTALyuu-p0/edit?gid=0#gid=0"},
    ],
  },
  {
    id: 3,
    title: "App Mobile",
    buttonLabel: "Xem báo cáo",
    buttonIconType: 'chart',
    tasks: [
      { id: "3-1", name: "Mapping dữ liệu", url: "https://wjpx2nokaqha.jp.larksuite.com/slides/OkRZscWGVleLkTdE9ZcjnN2hpAg" },
      { id: "3-2", name: "Test các luồng giáo viên , học sinh, phụ huynh", url: "https://wjpx2nokaqha.jp.larksuite.com/slides/OkRZscWGVleLkTdE9ZcjnN2hpAg" },
      { id: "3-3", name: "Lên task dựa trên ý kiến của anh Toàn", url: "https://njp3ijhflh4v.jp.larksuite.com/slides/KXZrsYZRBlUT9FdN3t0jfZFJpNc" },
      { id: "3-4", name: "Theo dõi và báo cáo tiến độ", url: "https://voduytoan.sg.larksuite.com/sheets/Jg4BslqrNhmn7FtvO1glOfLvgqZ?sheet=hmKZcS" },
    ],
  },
  {
    id: 4,
    title: "Các Module Khác",
    buttonLabel: "Truy cập",
    buttonIconType: 'link',
    tasks: [
      { id: "4-1", name: "Camera AI", url: "https://drive.google.com/drive/folders/18EuefGo2OzE3_qiqjXIDIm55GaU3E4QD?usp=sharing" },
      { id: "4-2", name: "Hồ sơ điện tử", url: "https://njp3ijhflh4v.jp.larksuite.com/sheets/KxCcsWh6HhjeL4tTz6pjXdpPpzg?sheet=JmW5sQ&table=tblR7jYJAL6gG9a4&view=vewBHLaAGe" },
      { id: "4-3", name: "Sổ chủ nhiệm", url: "https://njp3ijhflh4v.jp.larksuite.com/sheets/KxCcsWh6HhjeL4tTz6pjXdpPpzg?sheet=JmW5sQ&table=tblR7jYJAL6gG9a4&view=vewBHLaAGe" },
    ],
  },
];