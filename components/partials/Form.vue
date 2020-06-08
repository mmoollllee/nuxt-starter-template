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

    <label class="col-12 col-s-6 col-l-5">
      <span class="label">Company (optional)</span>
      <input
        v-model.trim="form.company"
        type="text"
        placeholder="Company (optional)"
        name="company"
        @input="$v.form.company.$touch()"
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
        required="required"
        @input="$v.form.mail.$touch()"
      />
      <div v-if="!$v.form.mail.required && form.showErrors" class="error">
        This field is required.
      </div>
      <div v-if="!$v.form.mail.email && form.showErrors" class="error">
        Please enter a valid email adress.
      </div>
    </label>

    <label class="col-12 col-s-6 col-l-5">
      <span class="label">Phone (optional)</span>
      <input
        v-model.trim="form.phone"
        type="text"
        placeholder="Phone (optional)"
        name="phone"
        @input="$v.form.phone.$touch()"
      />
    </label>

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
      <span class="label">Message</span>
      <textarea
        v-model.trim="form.message"
        type="text"
        placeholder="Your Message"
        name="message"
        required="required"
        @input="
          $v.form.message.$touch()
          autoGrow($event)
        "
      />
      <div v-if="!$v.form.message.required && form.showErrors" class="error">
        Please tell us your request.
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
        @mouseover="messageSentCaption = 'Set form back to default'"
        @mouseleave="messageSentCaption = 'Message sent'"
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
        Send Message
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
            >privacy policy</a
          ></span
        >
        <div
          v-if="!$v.form.privacy.mustBeTrue && form.showErrors"
          class="error"
        >
          To use the contact form, you have to accept this.
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

.error {
  color: rgba(236, 236, 236, 0.815);
}

.tt-100 {
  transform: translateY(calc(-100% - 10px));
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

<script type="text/javascript">
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

const mustBeEmpty = (value) => value.length === 0
const mustBeTrue = (value) => value === true || value === 1

export default {
  data() {
    return {
      form: {
        name: '',
        company: '',
        mail: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false,
        showErrors: false,
        statusMessage: null,
        status: '',
        messageSentCaption: 'Message sent',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      company: {},
      mail: {
        required,
        email,
      },
      phone: {},
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
        el.style.cssText = 'height:' + (el.scrollHeight + 30) + 'px'
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
      contactFormData.set('company', this.form.company)
      contactFormData.set('mail', this.form.mail)
      contactFormData.set('phone', this.form.phone)
      contactFormData.set('subject', this.form.subject)
      contactFormData.set('message', this.form.message)
      contactFormData.set('job', this.form.job)

      axios({
        method: 'post',
        url: '/mailer.php',
        data: contactFormData,
      })
        .then((response) => {
          // Handle success.
          this.form.status = 'success'
          this.form.statusMessage =
            'Message successfully sent. Thanks a lot! We will contact you as soon as possible.'
        })
        .catch((response) => {
          this.form.status = 'error'
          this.form.statusMessage =
            'An error has occurred. Please try again or inform us by other means.'
        })
    },
    clearForm() {
      this.form = {
        name: '',
        company: '',
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
