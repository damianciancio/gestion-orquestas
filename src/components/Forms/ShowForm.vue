<template>
    <form>
        <div class="mb-3 col-md-12 col-xs-12">
            <label>Título</label>
            <text-input
                v-model.trim="show.name"
                :class="{ 'is-invalid': $v.show.name.$error }"
                type="text"
            />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
            <label>Lugar</label>
            <text-input
                v-model.trim="show.place"
                :class="{ 'is-invalid': $v.show.place.$error }"
                type="text"
            />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
            <label>Fecha del show</label>
            <date-input
                v-model.trim="show.date"
                :class="{ 'is-invalid': $v.show.date.$error }"
                type="datetime-local"
            />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
            <label>Fecha de publicación</label>
            <date-input
                v-model.trim="show.publicDate"
                :class="{ 'is-invalid': $v.show.publicDate.$error }"
                type="datetime-local"
            />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
            <label>Cantidad de entradas disponibles</label>
            <text-input
                v-model.trim="show.tickets"
                :class="{ 'is-invalid': $v.show.tickets.$error }"
                type="number"
            />
        </div>
        <div class="mb-3 col-md-12 col-xs-12">
            <button class="btn btn-primary" type="button" v-on:click="submit">
                Guardar
            </button>
        </div>
    </form>
</template>
<script>
import moment from "moment";

import afterCurrentDateValidator from "@/helpers/vuelidate/afterCurrentDateValidator.js";

import { validationMixin } from "vuelidate";
import { required, integer } from "vuelidate/lib/validators";

import TextInput from "../UI/TextInput.vue";
import TextAreaInput from "../UI/TextAreaInput.vue";
import DateInput from "../UI/DateInput.vue";
import CheckInput from "../UI/CheckInput.vue";
import SelectInput from "../UI/SelectInput.vue";

export default {
    props: ["editNew", "mode"],
    components: {
        TextInput,
        TextAreaInput,
        DateInput,
        CheckInput,
        SelectInput,
    },
    mixins: [validationMixin],
    watch: {
        editNew(newVal) {
            this.aNew = {
                ...newVal,
                publicDate: newVal.publicDate
                    ? moment(newVal.publicDate).format("YYYY-MM-DD")
                    : "",
                date: newVal.date
                    ? moment(newVal.date).format("YYYY-MM-DD")
                    : "",
            };
        },
    },
    data() {
        return {
            show: {
                name: "",
                place: "",
                date: "",
                publicDate: "",
                tickets: null,
            },
        };
    },
    validations: {
        show: {
            name: {
                required,
            },
            place: {
                required,
            },
            tickets: {
                required,
                integer,
            },
            publicDate: {
                required,
                afterCurrentDateValidator,
            },
            date: {
                required,
                afterCurrentDateValidator,
            },
        },
    },
    methods: {
        submit() {
            console.log(this.show);
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$emit("submit", this.show);
            }
        },
    },
};
</script>
