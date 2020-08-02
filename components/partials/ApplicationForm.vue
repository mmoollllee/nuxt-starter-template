<template>
  <form class="form">
    <div
      v-if="form.statusMessage"
      :class="form.status"
      class="col-12 status-message"
    >
      {{ form.statusMessage }}
    </div>
    <label
      :class="{ 'form-group--error': $v.form.name.$error }"
      class="col-12 col-s-6 col-l-5"
    >
      <span class="label">Last Name</span>
      <input
        v-model.trim="form.name"
        type="text"
        placeholder="Last Name"
        name="name"
        required="required"
        @input="$v.form.name.$touch()"
      />
      <div v-if="!$v.form.name.required && form.showErrors" class="error">
        This field is required.
      </div>
    </label>

    <label
      :class="{ 'form-group--error': $v.form.name.$error }"
      class="col-12 col-s-6 col-l-5"
    >
      <span class="label">First Name</span>
      <input
        v-model.trim="form.firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
        required="required"
        @input="$v.form.firstName.$touch()"
      />
      <div v-if="!$v.form.firstName.required && form.showErrors" class="error">
        This field is required.
      </div>
    </label>

    <label
      :class="{ 'form-group--error': $v.form.phone.$error }"
      class="col-12 col-s-6 col-l-5"
    >
      <span class="label">Phone </span>
      <input
        v-model.trim="form.phone"
        type="text"
        placeholder="Phone (Mobile)"
        name="phone"
        required="required"
        @input="$v.form.phone.$touch()"
      />
    </label>

    <label
      :class="{ 'form-group--error': $v.form.mail.$error }"
      class="col-12 col-s-6 col-l-5"
    >
      <span class="label">Email Adress</span>
      <input
        v-model.trim="form.mail"
        type="email"
        placeholder="Email Adress"
        name="mail"
        @input="$v.form.mail.$touch()"
      />
      <div v-if="!$v.form.mail.email && form.showErrors" class="error">
        This email address does not seem to be valid?
      </div>
    </label>

    <div class="col-12 py-2">
      <span class="label font-weight-bold">{{ title }}</span>
      <ul class="list-unstyled row col-12">
        <li
          v-for="(job, jobIndex) in jobs"
          :key="jobIndex"
          class="custom-control custom-switch col-auto job"
        >
          <input
            :id="job"
            v-model="form.application"
            :value="job"
            :checked="type == job"
            type="checkbox"
            class="custom-control-input"
          />
          <label :for="job" class="custom-control-label">
            {{ job }}
          </label>
        </li>
      </ul>
    </div>

    <label id="subject" class="col-12">
      <span class="label">subject</span>
      <input
        v-model.trim="form.subject"
        type="text"
        placeholder="subject"
        name="subject"
        required="required"
        @input="$v.form.subject.$touch()"
      />
    </label>
    <div v-if="!$v.form.subject.mustBeEmpty && form.showErrors" class="col-12">
      <div class="error">
        Please leave this field empty.
      </div>
    </div>

    <label class="col-12 col-l-11">
      <span class="label">Your message</span>
      <textarea
        v-model.trim="form.message"
        type="text"
        placeholder="About you"
        name="message"
        required="required"
        @input="
          $v.form.message.$touch()
          autoGrow($event)
        "
      />
      <div v-if="!$v.form.message.required && form.showErrors" class="error">
        Please tell us something about you
      </div>
    </label>
    <div
      :class="!$v.form.message.required && form.showErrors ? 'pb-4' : ''"
      class="col-12 col-l-11 tt-100 text-right"
    >
      <button
        v-if="form.status === 'success'"
        type="submit"
        class="button success"
        data-icon-right="f"
        @click.prevent="clearForm"
        @mouseover="messageSentCaption = 'Reset form'"
        @mouseleave="messageSentCaption = 'application sent'"
      >
        {{ messageSentCaption }}
      </button>
      <button
        v-else
        type="submit"
        class="button"
        data-icon-right="c"
        @click.prevent="submitForm"
      >
        send
      </button>
      <label>
        <input
          v-model.trim="form.privacy"
          type="checkbox"
          name="privacy"
          @input="$v.form.privacy.$touch()"
        />
        <span class="label"
          >Consent to the use of data in accordance with
          <a
            href="/privacy/"
            data-fancybox=""
            data-type="ajax"
            data-src="/privacy/"
            data-filter="#content"
            >the privacy policy</a
          ></span
        >
        <div
          v-if="!$v.form.privacy.mustBeTrue && form.showErrors"
          class="error"
        >
          To use the form, you must accept this.
        </div>
      </label>
    </div>
  </form>
</template>

<style lang="scss" scoped>
#subject {
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  visibility: hidden;
}

textarea {
  min-height: 200px;
  padding-bottom: 80px;
  height: auto;
}

.tt-100 {
  transform: translateY(calc(-100% - 10px));
  padding-left: 2rem;
  padding-right: 2rem;
}

.job {
  min-width: 310px;
  max-width: 350px;
  width: 100%;
}
</style>

<script type="text/javascript">
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

const mustBeEmpty = (value) => value.length === 0
const mustBeTrue = (value) => value === true || value === 1

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'For which job are you applying?',
    },
    jobs: {
      type: Array,
      default: () => ['Office Work m/f/d', 'Photography Work m/f/d'],
    },
  },
  data() {
    return {
      form: {
        name: '',
        firstName: '',
        phone: '',
        mail: '',
        application: this.type ? [this.type] : [''],
        subject: '',
        message: '',
        privacy: false,
        showErrors: false,
        statusMessage: '',
        status: '',
        messageSentCaption: 'application sent',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      firstName: {
        required,
      },
      mail: {
        email,
      },
      phone: {
        required,
      },
      application: {},
      subject: {
        mustBeEmpty,
      },
      message: {
        required,
      },
      privacy: {
        mustBeTrue,
      },
    },
  },
  methods: {
    autoGrow(event) {
      const el = event.target
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0'
        el.style.cssText = 'height:' + (el.scrollHeight + 10) + 'px'
      }, 0)
    },
    submitForm() {
      if (this.$v.form.$invalid) {
        this.form.showErrors = true
        return
      }
      this.form.showErrors = false
      const contactFormData = new FormData()
      contactFormData.set('name', this.form.name)
      contactFormData.set('firstName', this.form.firstName)
      contactFormData.set('mail', this.form.mail)
      contactFormData.set('phone', this.form.phone)
      contactFormData.set('application', this.form.application)
      contactFormData.set('subject', this.form.subject)
      contactFormData.set('message', this.form.message)

      axios({
        method: 'post',
        url: '/mailer/mailer.php',
        data: contactFormData,
      })
        .then((response) => {
          // Handle success.
          this.form.status = 'success'
          this.form.statusMessage =
            'Application successfully sent. Thanks a lot! We will contact you as soon as possible.'
        })
        .catch((response) => {
          this.form.status = 'error'
          this.form.statusMessage =
            'An error has occurred. Please try again or apply by other means.'
        })
    },
    clearForm() {
      this.form = {
        name: '',
        firstName: '',
        mail: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false,
        showErrors: false,
      }
    },
  },
}
</script>
