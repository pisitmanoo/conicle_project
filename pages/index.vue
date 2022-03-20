<template>
  <body>
    <div id="app" class="app">
      <div class="el-form-font" style="padding-left: 60px">
        <el-card class="box-card" style="width: 300px">
          <template #header>
            <div class="card-header">
              <h2 class="font-weight">Total Time</h2>
            </div>
          </template>
          <div>
            <h2 class="font-weight">{{ strTime }}</h2>
          </div>
        </el-card>
      </div>
      <div style="flex-grow: 1; padding: 0px 60px; height: calc(100vh - 60px)">
        <h2 class="el-form-font">Log Time</h2>
        <el-divider />
        <el-form
          :label-position="'top'"
          ref="ruleForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="demo-ruleForm el-form-font"
        >
          <el-form-item required>
            <el-col :span="11">
              <el-form-item prop="date">
                <span slot="label" class="el-form-font">Date</span>
                <el-date-picker
                  v-model="ruleForm.date"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  style="width: 100%; font-family: inherit"
                />
              </el-form-item>
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">&nbsp;</span>
            </el-col>
            <el-col :span="11">
              <el-form-item prop="hours">
                <span slot="label" class="el-form-font">Hours</span>
                <el-input
                  placeholder="Hours"
                  v-model="ruleForm.hours"
                  style="font-family: inherit"
                />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item prop="comment">
            <span slot="label" class="el-form-font">Comment</span>
            <el-input
              placeholder="Comment"
              v-model="ruleForm.comment"
              style="font-family: inherit"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >Save</el-button
            >
            <el-button type="danger" @click="resetForm('ruleForm')"
              >Cancel</el-button
            >
          </el-form-item>
        </el-form>
        <el-divider />
        <div style="height: calc(100vh - 440px); overflow: scroll">
          <div class="el-form-font" v-for="item in items" :key="item.key">
            <div
              style="
                display: flex;
                width: 100%;
                justify-content: space-between;
                border: 2px solid var(--vt-c-text-dark-2);
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  background: #f5f7fa;
                  min-width: 120px;
                  padding: 10px;
                  border-right: 2px solid var(--vt-c-text-dark-2);
                "
              >
                <el-avatar :size="75" src="https://empty">
                  <img
                    src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t31.18172-8/24059722_1740737959331716_8038996738546096286_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHLn5k3FGKOUa8pQwAp6zQO0cDwvYgHptjRwPC9iAem2O97k8GCXElPRZ9cNygfH6A_Edbey6Gn0WRk26AHtTwv&_nc_ohc=HgjxdkWpNX4AX9RmGsw&tn=DSkE1OiM0je3N0xj&_nc_ht=scontent.fbkk12-4.fna&oh=00_AT-qnpWmn3gNFVpvfZxveHdLFPuunFksCEw2xufm4jBlKg&oe=625AA931"
                  />
                </el-avatar>
                <h4 class="el-form-font" style="margin: 0; margin-top: 10px">
                  Pisit
                </h4>
                <h4 class="el-form-font">manoo</h4>
              </div>
              <div
                style="
                  min-width: 120px;
                  justify-content: center;
                  align-items: center;
                  display: flex;
                  flex-direction: column;
                  padding: 10px;
                "
              >
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  "
                >
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                      font-size: 30px;
                    "
                  >
                    <i class="el-icon-time" style="margin: 0px 5px"></i>
                  </div>
                  <h3 class="el-form-font" style="margin: 0px">
                    {{ item.hours }}
                  </h3>
                  <h4
                    style="margin: 0px 5px; color: grey"
                    v-if="String(item.hours).length === 1"
                  >
                    hours
                  </h4>
                </div>
                <h4
                  style="margin: 0px; color: grey"
                  v-if="String(item.hours).length > 1"
                >
                  hours
                </h4>
                <el-tag effect="dark">
                  <div style="display: flex">
                    <div
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        font-size: 30px;
                      "
                    >
                      <i class="el-icon-date"></i>
                    </div>
                    <span style="margin-left: 10px">{{ item.date }}</span>
                  </div>
                </el-tag>
              </div>
              <div
                style="
                  flex-grow: 1;
                  padding: 10px;
                  font-size: 20px;
                  font-family: auto;
                "
              >
                <span>{{ item.comment }}</span>
              </div>
              <div style="padding: 10px">
                <el-button type="danger" @click="removeCard(item.key)"
                  >X</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      strTime: `0 hours`,
      ruleForm: {
        date: "",
        hours: "",
        comment: "",
      },
      rules: {
        date: [
          {
            required: true,
            message: "Please pick a date",
            trigger: "blur",
          },
        ],
        hours: [
          {
            required: true,
            message: "Please pick a hours",
            trigger: "blur",
          },
          {
            validator: (rule, value, callback) => {
              const isFloat = (n) => {
                return Number(n) === n && n % 1 !== 0;
              };
              if (!value) {
                return callback(new Error("Please input the age"));
              }
              setTimeout(() => {
                if (!Number.isInteger(Number(value))) {
                  if (isFloat(Number(value))) {
                    callback();
                    return;
                  }
                  callback(new Error("Please input digits"));
                } else {
                  callback();
                }
              }, 200);
            },
            trigger: "blur",
          },
        ],
        comment: [
          { required: true, message: "Please input comment", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const formEl = this.$refs[formName];
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
          // this.$data.items.push({
          //   ...this.$data.ruleForm,
          //   date: new Date(this.$data.ruleForm.date)
          //     .toISOString()
          //     .split("T")[0],
          //   key: this.$data.items.length,
          // });

          this.$store.commit("pushItem", {
            ...this.$data.ruleForm,
            date: new Date(this.$data.ruleForm.date)
              .toISOString()
              .split("T")[0],
          });

          this.$data.strTime = `${this.$store.state.items.reduce(
            (acc, { hours }) => acc + Number(hours),
            0
          )} Hours`;
          formEl.resetFields();
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    resetForm(formName) {
      const formEl = this.$refs[formName];
      if (!formEl) return;
      formEl.resetFields();
    },
    removeCard(key) {
      this.$store.commit("removeItem", key);
      this.$data.strTime = `${this.$store.state.items.reduce(
        (acc, { hours }) => acc + Number(hours),
        0
      )} Hours`;
    },
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  created() {
    this.$store.commit("setItems");
    this.$data.strTime = `${this.$store.state.items.reduce(
      (acc, { hours }) => acc + Number(hours),
      0
    )} hours`;
  },
  name: "IndexPage",
};
</script>

<style>
/* color palette from <https://github.com/vuejs/theme> */
:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-black: #181818;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;

  --vt-c-indigo: #2c3e50;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

/* semantic{} color variables for this project */
:root {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);

  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);

  --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-white);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style>
import #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.app {
  display: flex;
  padding-top: 40px;
}

.font-weight {
  font-weight: bold;
}

.btn-primary {
  margin-right: 5px;
  /* /color:blue; */
}

.el-form-font {
  font-weight: bold;
  color: black;
  font-family: auto;
}

.el-card__header {
  padding: 0px;
  background: #f5f7fa;
}

.el-card__body {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.card-header {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 200px;
}

/* 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
} */
</style>
