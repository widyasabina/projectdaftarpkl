import { Feature } from "@/types/feature";
import Icon from '@mdi/react';
import { mdiHospitalBuilding } from '@mdi/js';
import { mdiTownHall } from '@mdi/js';
import { mdiSheep } from '@mdi/js';
import { mdiCow } from '@mdi/js';
import { mdiBarn } from '@mdi/js';
import { mdiHomeSilo } from '@mdi/js';
import { mdiFood } from '@mdi/js';
import { mdiGreenhouse } from '@mdi/js';


const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiHospitalBuilding} size={1} />
      </svg>
    ),
    title: "RSH Cikole Lembang",
    paragraph:
      "Rumah Sakit Hewan Jawa Barat mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional/tugas teknis penunjang di bidang pelayanan rumah sakit hewan, meliputi aspek pelayanan medik veteriner dan penunjang medik veteriner melalui pemberian pelayanan kesehatan hewan secara menyeluruh, terdiri dari pemeriksaan klinis, diagnostic dan laboratoris untuk penyakit hewan dan penyakit hewan menular serta konsultatif kesehatan hewan.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiTownHall} size={1} />
      </svg>
    ),
    title: "Balai Kesehatan Hewan dan Kesehatan Masyarakat Veteriner",
    paragraph:
      "Mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional/tugas teknis penunjang di bidang pelayanan veteriner, meliputi pengujian penyakit hewan dan pengujian produk hewan, serta   mengendalikan pelaksanaan tugas pokok dan fungsi Balai Pelayanan Veteriner Cikole Lembang. ",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          
        />
        
        <Icon path={mdiSheep} size={1} /> 
      </svg>
    ),
    title: "Balai Pengembangan Perbibitan Ternak Domba dan Kambing Margawati",
    paragraph:
      "Merupakan salah satu Unit Pelaksana Teknis Dinas di Lingkungan Dinas Ketahanan Pangan dan Peternakan Provinsi Jawa Barat yang mempunyai tugas pokok melaksanakan kegiatan teknis operasional dan/atau kegiatan teknis penunjang tertentu di bidang pengembangan perbibitan ternak domba dan kambing meliputi pembibitan serta distribusi dan informasi.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiCow} size={1} />
      </svg>
    ),
    title: "Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Potong Ciamis",
    paragraph:
      "Mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional/tugas teknis penunjang di Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Potong Ciamis, meliputi Pelayanan Teknis, Distribusi dan Informasi, serta  mengendalikan pelaksanaan tugas pokok dan fungsi Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Potong Ciamis.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          
        />
       
        <Icon path={mdiHomeSilo} size={1} />
      </svg>
    ),
    title: "Balai Pelatihan Peternakan dan Ketahanan Pangan Cikole",
    paragraph:
      "Mempunyai tugas pokok melaksanakan kegiatan teknis operasional dan/atau kegiatan teknis penunjang tertentu dibidang pelatihan peternakan dan ketahanan pangan yang meliputi aspek program dan evaluasi serta penyelenggarann pelatihan.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiCow} size={1} />
      </svg>
    ),
    title: "Balai Pengembangan Ternak Sapi Perah dan Hijauan Pakan Ternak Cikole",
    paragraph:
      "Mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional bidang pengembangan ternak sapi perah dan hijauan pakan ternak, meliputi pelayanan teknis, distribusi dan informasi. Balai Pengembangan Ternak Sapi Perah dan Hijauan Pakan Ternak Cikole Lembang.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiGreenhouse} size={1} />
      </svg>
    ),
    title: "Balai Pengujian Mutu dan Keamanan Bahan Pakan Ternak Cikole",
    paragraph:
      "Mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional bidang pengujian mutu pakan ternak, meliputi penyiapan sampel dan pelayanan teknik.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiFood} size={1} />
      </svg>
    ),
    title: "Balai Pengawasan Mutu dan Keamanan Pangan",
    paragraph:
      "Mempunyai tugas pokok melaksanakan sebagian kegiatan teknis operasional di bidang otoritas kompeten keamanan pangan daerah, meliputi pelayanan teknis serta pengujian dan sertifikasi, serta mengendalikan pelaksanaan tugas pokok dan fungsi Balai Otoritas Kompeten Keamanan Pangan Daerah.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiCow} size={1} />
      </svg>
    ),
    title: "Balai Perbibitan dan Pengembangan Inseminasi Buatan Ternak Sapi Perah Bunikasih",
    paragraph:
      "Mempunyai tugas pokok menyelenggarakan sebagian tugas teknis operasional di bidang perbibitan dan pengembangan inseminasi buatan ternak sapi perah meliputi Pelayanan Pembibitan, Distribusi dan Informasi.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiBarn} size={1} />
      </svg>
    ),
    title: "Balai Perbibitan Ternak Unggas Jatiwangi  ",
    paragraph:
      "Mempunyai tugas pokok melaksanakan kegiatan teknis operasional dan/atau kegiatan teknis penunjang tertentu dibidang pengembangan perbibitan ternak unggas meliputi pembibitan, distribusi dan informasi.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiCow} size={1} />
      </svg>
    ),
    title: "Balai Pengembangan Ternak Sapi Perah",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiBarn} size={1} />
      </svg>
    ),
    title: "Balai Pengembangan Ternak Sapi Perah",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiBarn} size={1} />
      </svg>
    ),
    title: "Balai Pengembangan Ternak Sapi Perah",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          
        />
        <Icon path={mdiBarn} size={1} />
      </svg>
    ),
    title: "Balai Pengembangan Ternak Sapi Perah",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
