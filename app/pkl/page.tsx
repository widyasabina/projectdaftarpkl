import Link from "next/link";
import Header from "@/components/Header";

const pKl = () => {
  return (
    <>
    <Header />
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28  bg-primary bg-opacity-5 py-10 px-6" >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div>
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Daftar PKL
                </h3>
                {/* <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p> */}
                {/* <button className="mb-6 flex w-full items-center justify-center rounded-md bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#242B51] dark:text-body-color dark:shadow-signUp dark:hover:text-white">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign up with Google
                </button> */}
                {/* <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                </div> */}
                <form>
                  <div className="mb-8 ">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Nama Lengkap{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Masukan nama lengkap anda "
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="gender"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Jenis Kelamin{" "}
                    </label>
                    <select
                      name="gender"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    >
                      <option >Masukan jenis kelamin anda</option>
                      <option value="man">Pria</option>
                      <option value="woman">Wanita</option>
                      </select>
                  </div>
                  
                  <div className="mb-8">
                    <label
                      htmlFor="NIM"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      No. NIM/KTP/Kartu Pelajar{" "}
                    </label>
                    <input
                      type="text"
                      name="NIM"
                      placeholder="Masukan NIM anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Perguruan Tinggi/ Sekolah/ Organisasi{" "}
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Masukan sekolah anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Alamat Universitas{" "}
                    </label>
                    <input
                      type="textarea"
                      name="address"
                      placeholder="Masukan alamat anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 mb-8 sm:w-1/2 lg:w-full xl:w-1/2">
                    <label
                      htmlFor="department"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Jurusan {" "}
                    </label>
                    <input
                      type="text"
                      name="department"
                      placeholder="Masukan jurusan anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8 sm:w-1/2 lg:w-full xl:w-1/2">
                    <label
                      htmlFor="semester"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Semester/ Tingkat {" "}
                    </label>
                    <input
                      type="text"
                      name="semester"
                      placeholder="Masukan semester anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      No Telepon{" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Masukan no telepon anda"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="office"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Balai{" "}
                    </label>
                    <select
                      name="office"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    >
                      <option >Pilih Balai</option>
                      <option value="SH Cikole Lembang">RSH Cikole Lembang</option>
                      <option value="Balai Kesehatan Hewan dan Kesehatan Masyarakat Veteriner">Balai Kesehatan Hewan dan Kesehatan Masyarakat Veteriner</option>
                      <option value="Balai Pengembangan Perbibitan Ternak Domba dan Kambing Margawati">Balai Pengembangan Perbibitan Ternak Domba dan Kambing Margawati</option>
                      <option value="Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Potong Ciamis">Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Potong Ciamis</option>
                      <option value="Balai Pelatihan Peternakan dan Ketahanan Pangan Cikole">Balai Pelatihan Peternakan dan Ketahanan Pangan Cikole</option>
                      <option value="Balai Pengembangan Ternak Sapi Perah dan Hijauan Pakan Ternak Cikole">Balai Pengembangan Ternak Sapi Perah dan Hijauan Pakan Ternak Cikole</option>
                      <option value="Balai Pengujian Mutu dan Keamanan Bahan Pakan Ternak Cikole">Balai Pengujian Mutu dan Keamanan Bahan Pakan Ternak Cikole</option>
                      <option value="Balai Pengawasan Mutu dan Keamanan Pangan">Balai Pengawasan Mutu dan Keamanan Pangan</option>
                      <option value="Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Perah Bunikasih">Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Perah Bunikasih</option>
                      <option value="Balai Perbibitan Ternak Unggas Jatiwangi  ">Balai Perbibitan Ternak Unggas Jatiwangi</option>
                      <option value="Balai Pengembangan Ternak Sapi Perah">Balai Pengembangan Ternak Sapi Perah</option>
                      </select>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Email Anda{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="uni_mail"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Surat Dari Sekolah/ Kampus{" "}
                    </label>
                    <input
                      type="file"
                      name="uni_mail"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  
                  
                  <div className="mb-8">
                    <label
                      htmlFor="proposal"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Proposal Dari Sekolah/ Kampus{" "}
                    </label>
                    <input
                      type="file"
                      name="proposal"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  
                  
                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default pKl;
