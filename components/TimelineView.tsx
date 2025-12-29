import React, { useState, useEffect } from 'react';
import { ExternalLink, Table, Database, Play, RotateCcw, ClipboardPaste } from 'lucide-react';

// --- Types ---
interface TableData {
  headers: string[];
  rows: string[][];
}

const DEFAULT_DATA = `Tình trạng	Ngày	Công việc
Hoàn thành	1/10	HỌC LIỆU HĐTN, HN 12 (CĐ 1, 2 - HÙNG)
Hoàn thành	2/10	SGV Giao duc the chat 1<br>SGV Tu nhien xa hoi 2 CTST
Hoàn thành	3/10	Phân - Học liệu bài 4 - Lịch sử 10 - bộ CTST<br>Phân - Học liệu bài 4 - Lịch sử 12 - bộ CTST<br>Thạnh - HỌC LIỆU SGK LỊCH SỬ VÀ ĐỊA LÍ 7 (PHẦN ĐỊA LÍ) - BÀI 5
Hoàn thành	6/10	Up sách cho khối 4 - Chân trời sáng tạo<br>Up sách cho khối 5 - Chân trời sáng tạo<br>Tạo mục lục cho các sách khối 4<br>Tạo mục lục cho các sách khối 5
Hoàn thành	7/10	Chỉnh mục lục tiếng anh chi tiết cho khối 5<br>Chỉnh mục lục tiếng anh chi tiết cho khối 6
Hoàn thành	8/10	Up sách Nguyễn Khắc Thuần<br>Danh tướng Việt Nam - Tập 3, 4<br>Kể chuyện danh nhân đất Việt - Tập 1 -> 5<br>Lan theo dau xua<br>Le Quy Don - tap 1, 2
Hoàn thành	9/10	Cập nhật tên sách khối 1 đến 6 - Chân trời sáng tạo<br>Tạo mục lục Danh tướng Việt Nam - Tập 3, 4<br>Tạo mục lục Le Quy Don - tap 1, 2<br>Tạo mục lục Thực hành/Vở thực hành: Tiếng việt 1, Toán 1, Toán 8, Đạo đức 1, TNXH 1, HĐTN 1
Hoàn thành	10/10	Xác định mã định danh của sách Tiếng Việt 1<br>Xác định mã định danh của sách Tiếng Việt 2
Hoàn thành	13/10	Học liệu bài 9 - LSDL8 (phần LS) - bộ CTST<br>Học liệu nguyên bộ sách giáo dục thể chất 1 - Bộ CTST
Hoàn thành	14/10	Học cách vận hành hệ thống Quản lý trường học<br>Đọc tài liệu về sổ đăng bộ<br>Viết test case cho hệ thống Quản lý trường học
Hoàn thành	15/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	16/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	17/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	20/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	21/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	22/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	23/10	Hỗ trợ các trường đăng ký sổ đăng bộ (zalo OA) và ghi nhận lỗi
Hoàn thành	24/10	Tìm hiểu luồng hoạt động của các sổ mới (Số điểm, sổ học bạ, sổ theo dõi)
Hoàn thành	27/10	Vẽ sơ đồ nghiệp vụ cho Sổ điểm và sổ theo dõi
Hoàn thành	28/10	Tập trung nắm luồng nghiệp vụ và cách triển khai sổ ghi điểm và sổ theo dõi
Hoàn thành	29/10	Nghỉ
Hoàn thành	30/10	Tạo file dữ liệu mẫu GV/HS cho trường Sao Mai
Hoàn thành	31/10	Thực hiện phân công và đồng bộ dữ liệu về Sodangbo
Hoàn thành	3/11	Check lỗi và cập nhật task cho dev cấp Tiểu học trên local
Hoàn thành	4/11	Check lỗi và cập nhật task cho dev cấp THCS-THPT trên local
Hoàn thành	5/11	Check lỗi và cập nhật task cho dev cấp THCS-THPT trên local
Hoàn thành	6/11	Check lỗi và cập nhật task cho dev trên link thực tế
Hoàn thành	7/11	Viết kịch bản quay video hướng dẫn cho Sổ ghi điểm
Hoàn thành	10/11	Điều tiết triển khai Sổ ghi điểm và Sổ theo dõi
Hoàn thành	11/11	Soạn file hướng dẫn cho Sổ ghi điểm và Sổ theo dõi<br>Tổng hợp Q&A
Hoàn thành	13/11	Quay video hướng dẫn Sổ ghi điểm
Hoàn thành	14/11	Tổng hợp file mẫu Import Sổ ghi điểm
Hoàn thành	15/11	Tăng ca test sổ ghi điểm tiểu học
Hoàn thành	16/11	Tăng ca test sổ ghi điểm tiểu học + trung học + tổng hợp bug log
Hoàn thành	17/11	Tiếp tục test chức năng mới của sổ ghi điểm + làm lại file HDSD
Hoàn thành	18/11	Tiếp tục test chức năng mới của sổ ghi điểm + làm lại file HDSD
Hoàn thành	19/11	Tiếp tục test chức năng mới của sổ ghi điểm + làm lại file HDSD
Hoàn thành	20/11	Tiếp tục test chức năng mới của sổ ghi điểm + làm lại file HDSD
Hoàn thành	21/11	Viết kịch bản TestCase cho Sổ ghi điểm trung học và Sổ theo dõi
Hoàn thành	23/11	(Trống)
Hoàn thành	24/11	Viết kịch bản TestCase cho Sổ ghi điểm trung học và Sổ theo dõi (phải hoàn thành trong hôm nay)
Hoàn thành	25/11	Viết bộ Q&A cho sổ ghi điểm
Hoàn thành	26/11	Viết bộ Q&A cho sổ theo dõi
Hoàn thành	27/11	Viết bộ Q&A cho sổ theo dõi
Hoàn thành	28/11	Tiếp tục test luồng Sổ theo dõi , cập nhật HDSD , Cập nhật TestCase
Hoàn thành	1/12	Tìm hiểu các trường hợp ngoại lệ và cách triển khai nhập nhận xét tự động theo keyword
Tạm hoãn	2/12	Làm video HDSD<br>Test lại toàn bộ luồng<br>Tìm hiểu lại điều kiện xét lên lớp theo thông tư 22
Hoàn thành	3/12	Xuất pdf cho báo cáo<br>Nhập dữ liệu để demo<br>Test chức năng mới: Đồng bộ điểm lên csdl ngành
Hoàn thành	4/12	Tìm hiểu các trường hợp ngoại lệ và cách triển khai nhập nhận xét tự động theo keyword
Tạm hoãn	5/12	Tìm hiểu ngoại lệ (Chuyển trường / Nghỉ học ,...)<br>Tìm hiểu phân lớp lựa chọn, tự chọn<br>Trực zalo OA<br>Test chức năng mới của Sổ ghi điểm (thay đổi logic chốt sổ, tính toán lên lớp, hạnh kiểm,...)
Hoàn thành	6/12	Tăng ca T7: trực zalo OA
Hoàn thành	8/12	Họp quy trình với anh Huy<br>Sắp xếp lại form và cách làm việc với team<br>Nhập liệu<br>Làm báo cáo
Hoàn thành	9/12	Trực zalo OA<br>Nhập liệu<br>Làm tiếp trường hợp ngoại lệ
Hoàn thành	10/12	Đọc thông tư , tìm hiểu cách csdl ngành nhập nhận xét cho phẩm chất năng lực => Thay đổi giao diện hệ thống
Hoàn thành	11/12	Tìm hiểu luồng nhập tự động nhận xét => Suy nghĩ logic nhập
Hoàn thành	12/12	Test lại sổ ghi điểm tiểu học và kiểm tra lại giao diện có ảnh hưởng các luồng chốt sổ không
Hoàn thành	13/12	Tăng ca T7: trực zalo OA
Hoàn thành	15/12	Trực zalo OA<br>Test sổ ghi điểm tiểu học
Hoàn thành	16/12	Lên task sổ ghi điểm + sửa giao diện
Hoàn thành	17/12	Test app cho bên LMS, sổ bé ngoan, sổ sức khỏe
Hoàn thành	18/12	Test chức năng mới cho sổ ghi điểm
Hoàn thành	19/12	Thiết kế luồng + giao diện mới => Nhập nhận xét định kỳ hàng tháng
Hoàn thành	22/12	Thống kê các HS/GV còn thiếu Camera AI của 3 trường<br>Tiếp nhận Sổ chủ nhiệm và Hồ sơ điện tử<br>Chuẩn bị testcase + quy trình cho Hồ sơ điện tử
Hoàn thành	23/12	Test lại sổ ghi điểm => Thay đổi luồng nhập nhận xét<br>Test sổ chủ nhiệm
Hoàn thành	24/12	Sáng: đi triển khai cho trường tiểu học module camera AI
Hoàn thành	25/12	Nhập dữ liệu cho link test, chuẩn bị tài khoản cho anh Toàn tập huấn<br>Test lại các lỗi cũ đã fix
Hoàn thành	26/12	Test app, lên task cho app, luồng giáo viên<br>Tổng hợp bug log Sổ điểm => Test lại
Hoàn thành	27/12	Tổng hợp lỗi tồn đọng và check lại luồng hoạt động HK1 cho Sổ ghi điểm (TH, Trung học)
Hoàn thành	29/12	Test lại tất cả lỗi luồng HK1<br>Test app luồng giáo viên + học sinh => tổng hợp bug log`;

export const TimelineView: React.FC = () => {
  const [inputMode, setInputMode] = useState(false);
  const [rawText, setRawText] = useState(DEFAULT_DATA);
  const [parsedData, setParsedData] = useState<TableData>({ headers: [], rows: [] });

  // --------------------------------------------------------------------------
  // PARSER LOGIC: Xử lý dữ liệu Excel/Lark
  // --------------------------------------------------------------------------
  const parseExcelData = (text: string): TableData => {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentCell = '';
    let inQuotes = false;

    const normalizedText = text.replace(/\r\n/g, '\n');

    for (let i = 0; i < normalizedText.length; i++) {
      const char = normalizedText[i];
      const nextChar = normalizedText[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          currentCell += '"';
          i++; 
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === '\t' && !inQuotes) {
        currentRow.push(currentCell);
        currentCell = '';
      } else if (char === '\n' && !inQuotes) {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
      } else {
        currentCell += char;
      }
    }

    if (currentCell || currentRow.length > 0) {
      currentRow.push(currentCell);
      rows.push(currentRow);
    }

    if (rows.length > 0) {
      const validRows = rows.filter(r => r.some(c => c.trim() !== ''));
      const headers = validRows[0] || [];
      const bodyRows = validRows.slice(1);
      return { headers, rows: bodyRows };
    }

    return { headers: [], rows: [] };
  };

  // Tự động parse dữ liệu mặc định khi load
  useEffect(() => {
    if (DEFAULT_DATA) {
      setParsedData(parseExcelData(DEFAULT_DATA));
    }
  }, []);

  const handleProcess = () => {
    if (!rawText.trim()) return;
    const data = parseExcelData(rawText);
    setParsedData(data);
    setInputMode(false);
  };

  const handleReset = () => {
    setInputMode(true);
    // Giữ lại dữ liệu cũ để người dùng dễ chỉnh sửa
  };

  // --------------------------------------------------------------------------
  // RENDER HELPER
  // --------------------------------------------------------------------------
  const renderCellContent = (content: string) => {
    if (!content) return <span className="text-gray-300">-</span>;

    const cleanContent = content.trim();

    // 1. Link Detection
    if (cleanContent.startsWith('http://') || cleanContent.startsWith('https://')) {
      return (
        <a 
          href={cleanContent} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-blue-200 max-w-[200px] truncate"
          title={cleanContent}
        >
          <ExternalLink size={12} className="flex-shrink-0" />
          <span className="truncate">Mở liên kết</span>
        </a>
      );
    }
    
    // 2. Status Badges
    const lower = cleanContent.toLowerCase();
    if (lower === 'hoàn thành') 
      return <span className="text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">Hoàn thành</span>;
    if (lower === 'tạm hoãn') 
      return <span className="text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">Tạm hoãn</span>;

    // 3. Handle <br> tags
    if (cleanContent.includes('<br>')) {
       return (
         <span className="text-gray-700 text-sm">
           {cleanContent.split('<br>').map((part, index) => (
             <React.Fragment key={index}>
               {index > 0 && <br />}
               {part}
             </React.Fragment>
           ))}
         </span>
       );
    }

    // 4. Normal Text
    return <span className="text-gray-700 text-sm whitespace-pre-line">{cleanContent}</span>;
  };

  // --------------------------------------------------------------------------
  // MAIN RENDER
  // --------------------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      
      {/* HEADER */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Table className="text-blue-600" />
            Báo Cáo Tiến Độ
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {inputMode 
              ? "Nhập dữ liệu trực tiếp từ Excel hoặc Lark Suite." 
              : `Hiển thị ${parsedData.rows.length} bản ghi.`}
          </p>
        </div>

        {!inputMode && (
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
          >
            <RotateCcw size={16} />
            Cập nhật dữ liệu
          </button>
        )}
      </div>

      {/* INPUT AREA MODE */}
      {inputMode && (
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-in fade-in duration-300">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <ClipboardPaste size={18} />
              Vùng dán dữ liệu
            </div>
            <div className="text-xs text-gray-400">Hỗ trợ &lt;br&gt; để xuống dòng</div>
          </div>
          
          <div className="flex-1 relative">
            <textarea
              className="w-full h-96 p-6 text-sm font-mono text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/50"
              placeholder={`Dán dữ liệu của bạn vào đây...`}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              spellCheck={false}
            />
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              onClick={handleProcess}
              disabled={!rawText.trim()}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <Play size={18} fill="currentColor" />
              Hiển thị Bảng
            </button>
          </div>
        </div>
      )}

      {/* TABLE VIEW MODE */}
      {!inputMode && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[75vh] animate-in zoom-in-95 duration-300">
          {/* Scrollable Table Container */}
          <div className="flex-1 overflow-auto relative rounded-t-xl">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="sticky top-0 z-10">
                <tr className="bg-blue-600 text-white">
                  {parsedData.headers.map((header, index) => (
                    <th 
                      key={index} 
                      className="px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b border-blue-700 bg-blue-600 shadow-sm"
                    >
                      {header.replace(/"/g, '')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {parsedData.rows.length > 0 ? (
                  parsedData.rows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                      className="hover:bg-blue-50/50 transition-colors duration-150 group"
                    >
                      {parsedData.headers.map((_, colIndex) => (
                        <td key={colIndex} className="px-6 py-4 align-top whitespace-nowrap">
                          {renderCellContent(row[colIndex] || "")}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={parsedData.headers.length || 1} className="px-6 py-12 text-center text-gray-400 italic">
                      Không tìm thấy dữ liệu hợp lệ.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center flex-shrink-0 rounded-b-xl">
            <div className="flex items-center gap-2">
              <Database size={14} />
              <span>Parsed from manual input</span>
            </div>
            <span>Cập nhật lúc: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};