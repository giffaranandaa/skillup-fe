import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import HeroRegsiter from "../../assets/HeroRegister.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="xs:block sm:fixed bg-Teal w-full sm:h-screen sm:w-[37%]">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-white tracking-wide px-10 py-10">
            <h1 className="text-2xl uppercase font-bold mb-4">Skillup</h1>
            <p className="text-lg font-normal">
              Belajar dan Berkembang, Kunci Sukses Meraih Karier Impian.
            </p>
          </div>
          <img
            src={HeroRegsiter}
            alt="hero-register"
            className="mx-auto mt-4"
          />
        </div>
      </div>
      <div className="ml-0 sm:ml-[40%] h-screen py-10 px-10">
        <Link
          className="flex items-center gap-3 cursor-pointer hover:text-Teal hover:font-semibold"
          to="/"
        >
          <BsArrowLeft className="text-xl" />
          <h1>Kembali ke halaman utama</h1>
        </Link>
        <div className="flex flex-col items-center justify-center mt-7">
          <h1 className="text-2xl font-semibold mb-8">
            Bergabung Dengan SKILLUP
          </h1>
          <div className="xs:w-full sm:w-[70%] w-[60%]">
            <form>
              <div>
                <label for="inputNama">
                  Nama Lengkap
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <input
                  id="inputNama"
                  type="text"
                  className="mb-4 mt-3 border border-gray border-opacity-20 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                  placeholder="Masukan nama lengkap kamu"
                />
              </div>
              <div>
                <label for="inputEmail">
                  E-mail
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <input
                  id="inputEmail"
                  type="text"
                  className="mb-4 mt-3 border border-gray border-opacity-20 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                  placeholder="Masukan e-mail kamu"
                />
              </div>
              <div className="">
                <label>
                  Jenis Kelamin
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className="flex gap-5 mb-4 mt-3">
                  <input
                    id="inputLaki"
                    type="radio"
                    name="gender"
                    className=""
                    placeholder="Masukan e-mail kamu"
                  />
                  <label htmlFor="inputLaki">Laki- Laki</label>
                  <input
                    id="inputPerempuan"
                    type="radio"
                    name="gender"
                    className=""
                    placeholder="Masukan e-mail kamu"
                  />
                  <label htmlFor="inputPerempuan">Perempuan</label>
                </div>
                <div>
                  <label for="inputPassword">
                    Password
                    <span className="text-red-500 font-semibold"> *</span>
                  </label>
                  <input
                    id="inputPassword"
                    type="password"
                    className="mb-4 mt-3 border border-gray border-opacity-20 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                    placeholder="Masukan password kamu"
                  />
                </div>
                <div>
                  <label for="inputKPassword">
                    Konfirmasi Password
                    <span className="text-red-500 font-semibold"> *</span>
                  </label>
                  <input
                    id="inputKPassword"
                    type="password"
                    className="mb-4 mt-3 border border-gray border-opacity-20 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                    placeholder="Masukan password kamu"
                  />
                  <p className="text-[14px] text-gray/50">
                    Password minimal 8 karakter dengan kombinasi huruf kecil dan
                    angka.
                  </p>
                </div>
              </div>
            </form>
            <button className="mb-4 mt-3 py-3 px-4 bg-Teal w-full text-white rounded-sm hover:shadow-xl">
              Daftar Sekarang
            </button>
            <p className="text-[14px] text-gray">
              Dengan mendaftar berarti saya setuju dengan{" "}
              <Link className="text-Teal font-bold">S&K</Link> serta menerima
              email dari harisenin.com.
            </p>
            <p className="text-center mb-16 mt-3">
              Punya Akun?
              <Link to="" className="text-Teal font-semibold ml-1">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
